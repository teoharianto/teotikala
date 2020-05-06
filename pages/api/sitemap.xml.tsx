import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!res) return {};
	try {
	    // Set response header 
		res.setHeader('content-type', 'application/xml');
		res.setHeader('Content-Encoding', 'gzip');
		
		// A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
		// The readable stream it transforms must be in object mode.
		const smStream = new SitemapStream({
			hostname: 'https://tikala-bistro.com',
		});
		
		const pipeline = smStream.pipe(createGzip());
		// Add any static entries here
		smStream.write({ url: '/', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY, priority:1.0 });
		smStream.write({ url: '/bistro', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY, priority:0.80  });
        smStream.write({ url: '/catering', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY, priority:0.80 });
        smStream.write({ url: '/promo', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY, priority:0.80 });
        smStream.write({ url: '/contact', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY, priority: 0.80 });
		smStream.end();

		// cache the response
		// streamToPromise.then(sm => sitemap = sm)
		streamToPromise(pipeline);
		// stream the response
		pipeline.pipe(res).on('error', e => {
			throw e;
		});
	} catch (e) {
		res.status(500).end();
	}
};