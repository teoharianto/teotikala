import React from "react";

function sitemapXML() {
return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://tikala-bistro.com/</loc>
  <lastmod>2020-05-06T04:20:18+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://tikala-bistro.com/bistro</loc>
  <lastmod>2020-05-06T04:20:18+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://tikala-bistro.com/catering</loc>
  <lastmod>2020-05-06T04:20:18+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://tikala-bistro.com/promo</loc>
  <lastmod>2020-05-06T04:20:18+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://tikala-bistro.com/contact</loc>
  <lastmod>2020-05-06T04:20:18+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>
`
}

export default sitemapXML;