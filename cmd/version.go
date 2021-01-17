package cmd

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
)

// VersionCmd prints the CLI's version
var VersionCmd = &cobra.Command{
	Use: "version",
	Run: func(cmd *cobra.Command, args []string) {
		wd, wdErr := os.Getwd()
		versionPath := filepath.Join(wd, "VERSION")
		result, err := ioutil.ReadFile(versionPath)
		if err != nil {
			fmt.Fprintln(os.Stderr, err.Error())
			return
		}
		if wdErr != nil {
			fmt.Fprintln(os.Stderr, wdErr.Error())
			return
		}
		fmt.Println(string(result))
	},
}
