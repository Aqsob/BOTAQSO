const axios = require("axios");
const BodyForm = require("form-data");
const fs = require("fs");
const { fromBuffer } = require("file-type");

const TelegraPH = async (Path) => 
	new Promise(async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
		try {
              const apiKey = "6d207e02198a847aa98d0a2a901485a5",
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path));
			const data = await axios({
				url: "https://freeimage.host/api/1/upload",
				method: "POST",
				headers: {
					...form.getHeaders(),
				},
				data: form,
			});
			return resolve("https://iili.io" + data.data[0].src);
		} catch (err) {
			return reject(new Error(String(err)));
		}
	});
    
module.exports.TelegraPH = { TelegraPH }