
default: 61171.html quad_data.js

61171.html: generate_html.py search_pages.html
	python generate_html.py search_pages.html

quad_data.js: generate_quad_data.py search_result.html topomaps_all.csv
	python generate_quad_data.py

# TODO: this now just pulls 404s, because after an upgrade of their
# library software, NAU no longer uses the same URL scheme.

search_pages.html: search_urls.txt
	for path in $$(cat $<) ;do curl -s http://archive.library.nau.edu$$path; done > $@

search_urls.txt: search_result.json
	jq -r '.items[].itemLink' $< | sort -u > $@

search_result.json:
	curl 'http://archive.library.nau.edu/digital/api/search/searchterm/butchart%20stillimage/field/all/mode/all/conn/and/maxRecords/200/display/200/order/nosort/ad/asc' > $@

topomaps_all.csv: topomaps_all.zip
	unzip $< $@ && touch $@

# From https://www.usgs.gov/faqs/where-can-i-get-index-us-topo-maps
topomaps_all.zip:
	wget http://thor-f5.er.usgs.gov/ngtoc/metadata/misc/topomaps_all.zip

sync:
	cp 6*.html index.html *.js ~/rhodesmill.org/butchart
	,push

hiking_log.txt: hiking_log_ids
	mkdir -p hiking_logs
	for id in $$(cat hiking_log_ids); do echo $$id; wget -nc -q -O "hiking_logs/$$id" "http://archive.library.nau.edu/digital/api/collections/cpa/items/$$id/false" || true; done
	jq -r .text hiking_logs/* | sed 's/$$/\n/' | fold -s > $@

hiking_log_ids: hiking_log_results.json
	jq -r '.items[].itemId' $< | sort -n > $@

hiking_log_results.json:
	curl "http://archive.library.nau.edu/digital/api/search/collection/cpa/searchterm/Harvey%20Butchart's%20Hiking%20Log/page/1/maxRecords/200" > $@
