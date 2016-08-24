var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        nfc.addNdefListener(app.onNfc);
        alert('Arranque');
    },
    onNfc: function(nfcEvent) {
        var tag = nfcEvent.tag,
            message = tag.ndefMessage,
            record = message[0],
            value;
            alert('pase1');
    
        if (util.isType(record, ndef.TNF_WELL_KNOWN, ndef.RTD_URI)) {    
            value = ndef.uriHelper.decodePayload(record.payload);
            alert('pase2');                
        } else if (util.isType(record, ndef.TNF_WELL_KNOWN, ndef.RTD_TEXT)) {
            value = ndef.textHelper.decodePayload(record.payload);    
            alert('pase3');
        } else {
            value = JSON.stringify(record);    
            alert('pase4');
        }
        alert('pase5');
        alert(value);
    
    }
};
