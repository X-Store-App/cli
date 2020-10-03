import {program} from 'commander'
import commands from './commands'

export class cli {
    private args: string[]
    public constructor() {
        this.args = process.argv
    }
    public execute(command: string, args: string[]) {
        
    }
}