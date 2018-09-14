step1(function (error, value1) {
    if (error) { console.log("error") }
    else {
        step2(value1, function (error, value2) {
            if (error) { console.log("error") }
            else {
                step3(value2, function (error, value3) {
                    if (error) { console.log("error") }
                    else {
                        console.log(made it to getting value3);
                    }
                });
            }
        });
    }
});

