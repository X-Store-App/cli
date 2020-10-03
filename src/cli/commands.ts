interface commands {
    commands: [
        {
            title: string;
            do: (args: string[]) => void;
        }
    ]
}

const commands: commands = {
    commands: [
        {
            title: "version",
            do: (args: string[]) => {
                console.log(process.version)
            }
        }
    ]
}

export default commands