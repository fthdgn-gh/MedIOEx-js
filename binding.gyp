{
  "targets": [
    {
      "target_name": "medioex-io",
      "sources": [
        "src/bcm2835-io.cc",
        "src/bcm2835.c",
	"src/pmedex.c"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}

