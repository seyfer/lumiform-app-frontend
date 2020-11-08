abstract class BasePayloadBuilder<C, P = any> {
  protected payload: {[k: string]: any} = Object.create(null);

  abstract create(entity: C, ...args: any[]): P

  protected resolvePayload(resetPayload = true) {
    if (!resetPayload) return this.payload;

    const payload = { ...this.payload };

    this.payload = Object.create(null);

    return payload;
  }
}

export default BasePayloadBuilder;
