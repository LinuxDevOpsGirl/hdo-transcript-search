import React from 'react';

var div        = React.DOM.div;
var TopHits    = React.createFactory(require('./TopHits'));
var TopParties = React.createFactory(require('./TopParties'));
var TopPeople  = React.createFactory(require('./TopPeople'));

class ResultDetails {
    render() {
        return div({className: 'row'},
            div({className: 'col-md-3'}, TopPeople()),
            div({className: 'col-md-2'}, TopParties()),
            div({className: 'col-md-7'}, TopHits())
        );
    }
}

module.exports = ResultDetails;