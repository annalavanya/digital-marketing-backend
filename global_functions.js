
// Error.prepareStackTrace = (err, stack) => JSON.stringify({
//     message: err.message,
//     stack: stack.map(frame => ({
//         file: frame.getFileName(),
//         function: frame.getFunctionName(),
//         column: frame.getColumnNumber(),
//         line: frame.getLineNumber()
//     }))
// });


to = function (promise) {//global function that will help use handle promise rejections, this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
    return promise
        .then(data => {
            return [null, data];
        }).catch(err =>
            [pe(err)]
        );
}

pe = require('parse-error');

TE = function (err_message, log) { // TE stands for Throw Error
    if (log === true) {
        console.error(err_message);
    }

    throw new Error(err_message);
}


ReE = async function (res, err, code) { // Error Web Response
    // if (typeof code !== 'undefined') res.statusCode = code;
    return res.json({ success: false, error: err });
}


ReS = function (res, data, code) { // Success Web Response
    let send_data = { success: true };

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data);//merge the objects
    }
    return res.json(send_data)
};


//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});
