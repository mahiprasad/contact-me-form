//---------------amzSES------------------------------
const configure = {
    accessKeyId: "AKIATI4RZPXX4OUUO7AS",
    secretAccessKey: "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",
    apiVersion: '2010-12-01',
    region: 'ap-south-1'
}

const ses = new AWS.SES(configure);

function demo() {
    const params = {
        Destination: {
            ToAddresses: [
                "mp2937@srmist.edu.in",
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "<h1> Heading </h1>"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "huiyik"
            }
        },
        Source: "mahiprasad264@gmail.com"
    };
    ses.sendEmail(params, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Success");
        }
    })
}


//--------------------jsPDF--------------------------


var form = document.getElementById('forum');


form.addEventListener("submit", function(event){
    event.preventDefault();

    var msg = document.getElementById('msg').value;
    var doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(msg,20,20);
    doc.save("message.pdf");
});

