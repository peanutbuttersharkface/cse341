const brigRoute = (req, res) =>{
    res.send('Brig Thompson');
};

const derekRoute = (req, res) =>{
    res.send('Derek Thompson');
};

const quayRoute = (req, res) =>{
    res.send('Quay Thompson');
};

module.exports ={
    brigRoute,
    derekRoute,
    quayRoute
};