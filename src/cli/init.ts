import {program} from 'commander'
import {cli} from './cli'
import packageNPM from '../../package.json'

export function init() {
    program.parse(process.argv)
    program.version(packageNPM.version)
    program.option("--version, -v", "Prints the current CLI version.")
    program.option("help", "")
    program.option("publish", "Publishes the CWD to XStore if the package exists and it's yours.")
}