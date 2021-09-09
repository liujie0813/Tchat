import messageType from './messageType'

const ackMap = new Map();
const commandMap = new Map();

/**
 * 0,  LoginRequestMessage
 * 1,  LoginResponseMessage
 * 2,  LogoutRequestMessage
 * 3,  LogoutResponseMessage
 * 4,  C2CSendRequestMessage
 * 5,  C2CSendResponseMessage
 * 6,  C2CPushRequestMessage
 * 7,  C2CPushResponseMessage
 * 8,  C2GSendRequestMessage
 * 9,  C2GSendResponseMessage
 * 10, C2GPushRequestMessage
 * 11, C2GPushResponseMessage
 * 12, HeartBeatRequestMessage
 * 13, HeartBeatResponseMessage
 */
commandMap.set(5, messageType.C2CSendResponseMessage);
commandMap.set(6, messageType.C2CPushRequestMessage);

const handleMessage = (command, seqId, data) => {
	let type = commandMap.get(command);
	switch (type) {
		case messageType.C2CSendResponseMessage:
			handleC2CSendResp(data);
			break;
		case messageType.C2CPushRequestMessage:
			break;
	}
}

const handleC2CSendResp = (resp) => {
	let seqId = resp.seqId;
	ackMap.delete(seqId)

}

const addAckQueue = (seqId) => {
	ackMap.set(seqId)
}

export {
	handleMessage, addAckQueue
}