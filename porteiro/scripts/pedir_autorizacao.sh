INSTANCE_ID_PORTEIRO=i-00f8f9760a3cec52b
IP_PORTEIRO=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID_PORTEIRO --query "Reservations[].Instances[].PublicIpAddress" --profile cliente-porteiro --region us-east-1 --output json | grep -vE '\[|\]' | awk -F'"' '{ print $2 }')
echo $IP_PORTEIRO


#exit 1
PEM_PATH="/home/georges/Downloads/ec2-key.pem"

SERVIDOR_RDS_1=lab-db.czyeoymqiy5v.us-east-1.rds.amazonaws.com
PORTA_LOCAL_RDS_1=5433

SERVIDOR_RDS_2=SEU_SERVIDOR_2
PORTA_LOCAL_RDS_2=3307

ssh -f -N -i $PEM_PATH ec2-user@$IP_PORTEIRO -L $PORTA_LOCAL_RDS_1:$SERVIDOR_RDS_1:5432 -L $PORTA_LOCAL_RDS_2:$SERVIDOR_RDS_2:3306

echo "Porteiro liberou acesso para:"
echo "> $SERVIDOR_RDS_1 no endereço *127.0.0.1:$PORTA_LOCAL_RDS_1"
echo "> $SERVIDOR_RDS_2 no endereço *127.0.0.1:$PORTA_LOCAL_RDS_2"