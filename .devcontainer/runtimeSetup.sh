#
#   All commands that must be run once the container is created.
#   Generally we won't need this, but there can be cases.
#
#   This would be executed just after the .zshrc script is executed when
#   the shell has completed coming up.
#
#   It is currently configured to dump a log to the /runtimeSetup.log file
set -e -x