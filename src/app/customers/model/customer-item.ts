export interface CustomerItem {
    id: string;
    firstname: string;
    lastname: string;
    taxId: string;
}

export class CustomerItemImpl implements CustomerItem {

    public id: string;
    constructor(public firstname: string, public lastname: string, public taxId: string) {
        this.id = this.generateUuid();
    }

    private generateUuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
            return v.toString(16);
        });
    }

}
