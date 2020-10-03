import commands from './commands'

export class cli {
    private args: string[]
    public constructor() {
        this.args = process.argv
    }
    public execute(command: string, args: string[]) {
        commands.commands.forEach(thisCommand => {
            if(command === thisCommand.title) {
                thisCommand.do(process.argv)
            }
        })
    }
}