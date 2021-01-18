package cmd

import (
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use: "",
	Run: func(cmd *cobra.Command, args []string) {

	},
}

// Execute inits commands
func Execute() {
	rootCmd.AddCommand(VersionCmd)
	rootCmd.Execute()
}
