## GOOGLE DORCKING
crawlers are used top traverse
it crawls the contents of the website and gives 
a crawler is also called spider or bot
HOW A CRAWLER SEARCHES
-A crawler, also called a spider or bot, fetches the HTML content of the pages from the seed URLs.
-After fetching the content, the crawler:
    Extracts useful data like links (hyperlinks pointing to other pages).
    Analyzes meta tags, keywords, or structured data (e.g., JSON-LD or Schema.org).
    May save specific elements, such as text, images, or metadata, depending on its purpose.
-Storing Data
    The content of the crawled pages is stored in a repository or database for further processing.
    Search engines store this data in an index, which enables fast retrieval during searches.
-Following Links
    Crawlers identify links (e.g., <a href> tags) on the current page and add them to a queue of URLs to visit.
    New URLs are prioritized based on factors like relevance, authority, or freshness.
-Repeating the Process     
    The crawler continues this process recursively, fetching content from the queued URLs, extracting data, and adding more links to the queue.


SEO(search engine optimisation)
It is the practice of optimizing a website to improve its visibility and ranking on search engine result pages (SERPs) for specific keywords or phrases. The goal of SEO is to attract more organic (unpaid) traffic by ensuring that a website appears higher in search engine results for relevant queries.

Robots.txt
User-agent	Specify the type of "Crawler" that can index your site (the asterisk being a wildcard, allowing all "User-agents"
Allow	Specify the directories or file(s) that the "Crawler" can index
Disallow	Specify the directories or file(s) that the "Crawler" cannot index
Sitemap	    Provide a reference to where the sitemap is located (improves SEO as previously discussed, we'll come to sitemaps in the next task)

The robots.txt file is a text file used by websites to instruct web crawlers (also known as bots or spiders) on which parts of the site they are allowed or disallowed to access. It is part of the Robots Exclusion Protocol and is typically placed in the root directory of a website (e.g., https://example.com/robots.txt).
1. User-Agent:
Specifies which crawler (or bot) the rules apply to.
2. Disallow:
Specifies the parts of the site that crawlers are not allowed to access.
3. Allow:
Overrides a Disallow rule, allowing access to specific pages or directories.
4. Crawl-Delay:
Sets a delay (in seconds) between successive requests by the bot to reduce server load.
5. Sitemap:
Provides the location of the website's XML sitemap, which helps crawlers discover all the pages on the site.


Sitemaps: A Roadmap for Websites

Sitemaps function as a digital roadmap for websites, guiding search engine crawlers to content efficiently. Much like how geographical maps provide directions in the real world, sitemaps outline the structure and pathways of a website's pages.
What are Sitemaps?

Sitemaps are XML files that list a website’s pages in a structured format, helping search engine crawlers locate content. They indicate essential routes, prioritizing important pages and frequently updated content.

Importance of Sitemaps in SEO

Sitemaps play a vital role in Search Engine Optimization (SEO), influencing how well a website is indexed. Here's why they're favored:

    Efficient Crawling: Crawlers, which index website content for search engines, rely on sitemaps to find pages quickly. Instead of guessing or exploring links manually, crawlers follow the direct paths specified in the sitemap.

    Improved Visibility: Pages listed in the sitemap are more likely to be indexed, increasing the chances of appearing in search engine results.

    Handling Large or Complex Websites: For sites with deep structures, dynamic pages, or recent updates, sitemaps ensure that no content is overlooked.

    Prioritization: Sitemaps allow website owners to specify the importance of pages and their update frequency, guiding crawlers on where to focus.

Why Are Sitemaps Crucial for Search Engines?

Search engines process vast amounts of data daily. Sitemaps simplify their task by:

    Reducing the time needed to locate content.
    Avoiding redundant crawling of unimportant pages.
    Enhancing the indexing process by predefining the structure.
    
What is Google Dorking?

Google Dorking involves crafting search queries using Google’s advanced search operators to locate specific types of data. These queries can target file types, website directories, indexed pages, and more, allowing users to bypass the need for deeper manual searches.

For example:

    To find PDF files on a website:
site:example.com filetype:pdf

site:	   Search within a specific website/domain	      site:example.com
intitle:	Find pages with specific text in the title	  intitle:"index of"
inurl:	Search for text in the URL	                      inurl:admin
filetype:	Search for specific file types	              filetype:pdf
cache:	View Google’s cached version of a webpage	      cache:example.com
related:	Find websites related to a specific domain	  related:example.com
allintext:	Search for specific text in the body	      allintext:"confidential report"
ext:	Another way to search for file types	          ext:doc



TASK 2
Name the key term of what a "Crawler" is used to do is index
What is the name of the technique that "Search Engines" use to retrieve this information about websites?      crawling
What is an example of the type of contents that could be gathered from a website?     keywords

TASK 3

Looked into https://web.dev/measure/ to check the score of tryhackme

Task 4
Where would "robots.txt" be located on the domain "ablog.com"    ablog.com./robots.txt
If a website was to have a sitemap, where would that be located?   /sitemap.xml
How would we only allow "Bingbot" to index the website?   User-agent:bingbot
How would we prevent a "Crawler" from indexing the directory "/dont-index-me/"?    Disallow:/dont-index-me/
What is the extension of a Unix/Linux system configuration file that we might want to hide from "Crawlers"?   conf

Task 5

What is the typical file structure of a "Sitemap"?    xml
What real life example can "Sitemaps" be compared to? Map
Name the keyword for the path taken for content on a website   route

Task 6

What would be the format used to query the site bbc.co.uk about flood defences   site: bbc.co.uk flood defences
What term would you use to search by file type?  filetype:
What term can we use to look for login pages?   intitle: login


