sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectso/test/integration/FirstJourney',
		'projectso/test/integration/pages/SOImportedList',
		'projectso/test/integration/pages/SOImportedObjectPage'
    ],
    function(JourneyRunner, opaJourney, SOImportedList, SOImportedObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectso') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSOImportedList: SOImportedList,
					onTheSOImportedObjectPage: SOImportedObjectPage
                }
            },
            opaJourney.run
        );
    }
);