export interface IProducer<T> {
    sendMessage(eventType: string, dataObj: T): Promise<void>
}