if (Meteor.isClient) {
    

    Template.main.helpers({
        publicFigure: function() {
            var publicFigures = ["Syforce RaT4LIF3", "Kerp", "frogurt", "KJANEKK", "Vsepr", "3o0", "nothinghere", "SlumPillage", "VoltNinjA", "Strategas", 
            "Zhanos", "Snebbert", "EHomda", "Senichi", "Real X", "wolfz", "Bilingualistic", "SeaJay32", "TiffanyisGG" ];
            
            var pubfig = publicFigures[Math.floor(Math.random()*publicFigures.length)];
            console.log(pubfig);
            return pubfig;
        }
    });

    Template.main.events({
        'click button': function() {
            console.log('clicked');
            // increment the counter when button is clicked
            //Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
