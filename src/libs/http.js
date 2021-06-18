

class Http{
    
    static instance = new Http();
    get = async(url) => {

    try {

      let req = await fetch(url);

      let json = await req.json();

      return json;
    }catch(e){
        console.log("http get method error ", e);
        trows =Error(e);
    }
    }
    post = async(url,body) =>{
       try{
           let req = await fetch(url,{method:"POST",body});
           let json = await req.json();
           return json;
       }catch(e){
        console.log("http POST method error",e);
        trows= Error(e);
       }

    }
};
export default Http;
