# GeoRoots Mapper
Browser based tool for visual inspection for EU Deforestation Regulation (EUDR) GeoJSON files

This tool has been developed to allow for quick visual inspection of GeoJSON data intended for EUDR complaince.

The app relies on internet access to fetch maps, forest and forest loss layers, satelite imagery from different sources. It does not share or send your data for processing on any external server.

## Usage

* Open the mapper.html file in your browser.
* Select a language from the dropdown at the top.
* Drag & Drop correctly prepared .json or .geojson file into the centre of the page or use the file selector button.
* Once loaded, select relevant satelite layers, overlays and forest loss layers.
* Click on individual locations to inspect all properties.

## FAQ

##### Q: **My language is not included. Can it be added?**
A: Yes, please open an issue ticket and request a new language.

##### Q: **The Mapper shows information about the geolocations, but when I sumbit it into EU system the information does not appear. Why?**
A: EU DDS system expects specific property names for different fields (ProducerPlace, ProductionPlace, ProducerCountry, etc.) whereas Mapper shows all properties stored in the GeoJSON file. If the EU system is not recognizing some of these properties correctly, check whether the property names match what EU system is expecting.

##### Q: **My farm is located on land that is considered Forest Coverage under the GFC2020v2 dataset. Is that an issue?**
A: EU is aware of the errors and inaccuracies in the GFC2020v2 dataset and therefore it should be taken as one of many indicators. It is unlikely that farming on the Forest Coverage area will trigger an immediate high risk assessment.

##### Q: **Some points represented by circles are overlapping. Is that an issue?**
A: In general it is not. Point locations can have different shapes and the drawn circles are just for indicative purposes only. But many circles on top of each other might indicate issues with the data collection.


## About GeoRoots: Open Source Coffee Industry Tools for EUDR Compliance and geo traceability

GeoRoots is a collection of minimalistic, open-source tools designed specifically for the coffee industry to meet EU Deforestation Regulation (EUDR) requirements and enhance geo traceability.

Our philosophy is simple: provide useful tools that respect your privacy, work offline (where possible), and require no complex setup or subscription fees. Every tool runs entirely in your browser and can be downloaded for offline use.

### Why Use GeoRoots?

*   **100% Private**: All tools run locally in your browser. No data is ever transmitted to external servers.
*   **Open Source**: Fully open source and transparent. Inspect, modify, and contribute to the code.
*   **Offline Ready**: Download and use tools completely offline. Perfect for remote locations.
*   **Mobile Friendly**: Works on desktop, tablet, and mobile devices.

### Perfect for:

*   Coffee producers and cooperatives
*   Smaller coffee traders and exporters
*   Coffee roasters and importers
*   Sustainability consultants

### Useful Resources

*   [EUDR DDS on LIVE Environment](https://eudr.webcloud.ec.europa.eu/tracesnt/)
*   [EUDR DDS on TEST Environment](https://acceptance.eudr.webcloud.ec.europa.eu/tracesnt/)
*   [EUDR on Green Forum](https://green-forum.ec.europa.eu/deforestation-regulation-implementation/information-system-deforestation-regulation_en)
*   [EUDR on EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/HIS/?uri=CELEX:52024PC0452)

### Contributing

We welcome contributions! Please see our [contribution guidelines](CONTRIBUTING.md) for more information.

### License

This project is licensed under the GPLv3 License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or feedback, please open an issue on this repository.
