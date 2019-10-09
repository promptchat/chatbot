export const wrapErrors = (data) => {
    let result = {};
    for(let i in data) {
        if(data.hasOwnProperty(i)) {
            let errors = data[i];
            let t = result;
            let parts = i.split(".");
            let len = parts.length;
            for(let l = 0; l<len;  l++) {
                let j = parts[l];
                if(l === len -1) {
                    t[j] = errors;
                } else {

                    if (typeof t[j] === "undefined") {
                        t[j] = {};
                    }
                    t = t[j];
                }
            }
        }
    }

    return result;
};

