package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

func Init(cmd *cobra.Command, args []string) {
	fmt.Println("hello, world!")
}
