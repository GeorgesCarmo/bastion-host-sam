const AWS = require ('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });
const params = {
  InstanceIds: ['i-00f8f9760a3cec52b'],
};

exports.startEC2Instances = () => {
    return ec2.startInstances(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log("Bastion Host ligado com sucesso!");
});
}

exports.stopEC2Instances = () => {
    return ec2.stopInstances(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log("Bastion Host desligado com sucesso!");
});
}
