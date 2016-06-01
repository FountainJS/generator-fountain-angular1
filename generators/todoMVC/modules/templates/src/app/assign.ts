// tslint:disable-next-line:interface-name
interface ObjectCtor extends ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
  return;
};
