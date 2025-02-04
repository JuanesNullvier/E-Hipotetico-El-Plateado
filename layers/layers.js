var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1 = new ol.format.GeoJSON();
var features_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1 = format_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.readFeatures(json_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.addFeatures(features_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1);
var lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1, 
                style: style_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1,
                popuplayertitle: 'Sitios de potencial riesgo por activación de artefactos explosivos',
                interactive: false,
    title: 'Sitios de potencial riesgo por activación de artefactos explosivos<br />\
    <img src="styles/legend/Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1_0.png" /> 120 m<br />\
    <img src="styles/legend/Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1_1.png" /> 160 m<br />\
    <img src="styles/legend/Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1_2.png" /> 40 m<br />\
    <img src="styles/legend/Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1_3.png" /> 80 m<br />'
        });
var format_Hoteles_2 = new ol.format.GeoJSON();
var features_Hoteles_2 = format_Hoteles_2.readFeatures(json_Hoteles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_2.addFeatures(features_Hoteles_2);
cluster_Hoteles_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hoteles_2
});
var lyr_Hoteles_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_2, 
                style: style_Hoteles_2,
                popuplayertitle: 'Hoteles',
                interactive: true,
                title: '<img src="styles/legend/Hoteles_2.png" /> Hoteles'
            });
var format_Sitiosdeinters_3 = new ol.format.GeoJSON();
var features_Sitiosdeinters_3 = format_Sitiosdeinters_3.readFeatures(json_Sitiosdeinters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosdeinters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosdeinters_3.addFeatures(features_Sitiosdeinters_3);
var lyr_Sitiosdeinters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosdeinters_3, 
                style: style_Sitiosdeinters_3,
                popuplayertitle: 'Sitios de interés',
                interactive: true,
                title: '<img src="styles/legend/Sitiosdeinters_3.png" /> Sitios de interés'
            });
var format_Sitiosdepotencialriesgo_4 = new ol.format.GeoJSON();
var features_Sitiosdepotencialriesgo_4 = format_Sitiosdepotencialriesgo_4.readFeatures(json_Sitiosdepotencialriesgo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosdepotencialriesgo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosdepotencialriesgo_4.addFeatures(features_Sitiosdepotencialriesgo_4);
var lyr_Sitiosdepotencialriesgo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosdepotencialriesgo_4, 
                style: style_Sitiosdepotencialriesgo_4,
                popuplayertitle: 'Sitios de potencial riesgo',
                interactive: true,
                title: '<img src="styles/legend/Sitiosdepotencialriesgo_4.png" /> Sitios de potencial riesgo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.setVisible(true);lyr_Hoteles_2.setVisible(true);lyr_Sitiosdeinters_3.setVisible(true);lyr_Sitiosdepotencialriesgo_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1,lyr_Hoteles_2,lyr_Sitiosdeinters_3,lyr_Sitiosdepotencialriesgo_4];
lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_Hoteles_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sitiosdeinters_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sitiosdepotencialriesgo_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_Hoteles_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sitiosdeinters_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sitiosdepotencialriesgo_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Sitiosdepotencialriesgoporactivacindeartefactosexplosivos_1.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_Hoteles_2.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'header label - always visible', });
lyr_Sitiosdeinters_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Sitiosdepotencialriesgo_4.set('fieldLabels', {'id': 'no label', 'name': 'inline label - visible with data', });
lyr_Sitiosdepotencialriesgo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});