const { EC2Client, StartInstancesCommand, StopInstancesCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "us-east-1" });

const params = {
  InstanceIds: ["i-00f8f9760a3cec52b"],
};

exports.startEC2Instances = async () => {
  try {
    const command = new StartInstancesCommand(params);
    const response = await ec2Client.send(command);
    console.log("Bastion Host ligado com sucesso!", response);
  } catch (err) {
    console.error("Erro ao ligar Bastion Host:", err);
  }
};

exports.stopEC2Instances = async () => {
  try {
    const command = new StopInstancesCommand(params);
    const response = await ec2Client.send(command);
    console.log("Bastion Host desligado com sucesso!", response);
  } catch (err) {
    console.error("Erro ao desligar Bastion Host:", err);
  }
};
