class PCTamperMonkey {
    constructor(adminTopUrl) {
        if (typeof adminTopUrl == "undefined") {
            this.adminTopUrl = "https://admin-app.photocreate.jp/adm/";
        } else {
            this.adminTopUrl = adminTopUrl;
        }
    }

    // dummy function
    add(a, b) {
        return a + b;
    }

}
