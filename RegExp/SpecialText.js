export const tryIt = (...args) => {

    let testText = /[/*-+.~!@#$%^&()_=`,;'[\]<>?:"{}\\|]/g;
    for (let i = 0; i < args.length; i++) {
        if (args[i].trim() === '' || testText.test(args[i])) {
            return true;
        }
    }
    return false;
}
