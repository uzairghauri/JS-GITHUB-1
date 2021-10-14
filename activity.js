let playPool = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('pool');
        }, 1000);
    });
    };

    let playTT = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve('table tennis');
            }, 1000);       
    });
};
  
  let foosball = () => {
      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              resolve('foosball')
          }, 1000);
      });
  };
  
  let cards = () => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve('card games')
      }, 1000);
    });
}

  let videoGames = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('video games')
        }, 1000);
    });
};

  
  module.exports = {playPool, cards, foosball, videoGames, playTT};