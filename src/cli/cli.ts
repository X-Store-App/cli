import cli from 'cli'
import commands from './commands'

export class CLI {
    private args: string[]
    public constructor(args: string[]) {
        this.args = args
        this.init()
    }
    public execute(command: string, args: string[]) {
        
    }
    private init() {
        
    }
}