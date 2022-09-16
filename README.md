# cloudflare-url-shortener

cloudflare-url-shortener is a single file URL shortener that basically converts a GET https://example.org/X into some other URL using a dictionary of values as the lookup table.

It has no external dependancies, the code is 9 lines and the duictionary of values is however long the number of entries is. This is meant for below a 100, e.g. a personal url shortener.

Simply create it, add a route and assign it, and voila.

Median CPU time is 0.6ms.
