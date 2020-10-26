
module.exports = {
   /* demoService: async (request) => {
        let promise = new Promise(async (resolve, reject) => {
        let conn = new jsforce.Connection({
            loginUrl: request.url
        });
        try {
            await conn.login(request.username, request.password+request.apiKey);
            console.log("connection successful")
            let soql = request.query
            let data = await conn.query(soql);
            resolve (data)

        } catch (err) {
            reject(err)
        }
    })
    let result = await promise;
        return result;
    }*/
}