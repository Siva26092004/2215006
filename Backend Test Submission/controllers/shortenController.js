import shortid from "shortid";
import Url from '../model/urlSchema.js';
import log from "../../LogginMiddleware/log.js";
const shorten=async (req,res)=>{
    let { url,shortCode,validity } = req.body;
    
  if(!url){
    log("backend","error" ,"controller","missing fields");
   return res.status(400).json("Missing fields");
   
  }
  const originalUrl=url;
  
  if(!shortCode) shortCode=shortid.generate();
  if(!validity)validity=30;
  console.log(originalUrl,shortCode,validity);
  const shortUrl = `http://hostname:port/shortUrls/${shortCode}`;
  try {
    let newurl = new Url({ originalUrl, shortUrl,validity });
  
    await newurl.save(); 
      console.log("inside");
   return  res.status(200).json(newurl);
   
  } catch (error) {
    log("backend","error","db","Internal server error");
    return res.status(500).json({ error: 'Internal server error' });

  }
}
export default shorten;