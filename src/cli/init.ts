import {cli} from './cli'

export function init() {
    const InstanceCLI = new cli()
    InstanceCLI.execute(process.argv[2], process.argv)
}