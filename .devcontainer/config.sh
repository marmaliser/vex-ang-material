#
#   This file is prepended to the .zshrc that comes default during a .zsh shell install
#
#   Customization instructions here: https://github.com/denysdovhan/spaceship-prompt/blob/master/docs/Options.md
#
SPACESHIP_EXIT_CODE_SHOW="true"
# SPACESHIP_KUBECTL_SHOW=true
SPACESHIP_RPROMPT_ORDER=(exit_code)
SPACESHIP_PROMPT_ORDER=(
  time # Time stamps section
  # user          # Username section
  dir # Current directory section
  # host          # Hostname section
  git  # Git section (git_branch + git_status)
  node # Node.js section
  # ruby          # Ruby section
  # xcode         # Xcode section
  # swift         # Swift section
  # golang        # Go section
  # php           # PHP section
  # rust          # Rust section
  docker # Docker section
  # gcloud        # Google Cloud Platform section
  # venv          # virtualenv section
  # conda         # conda virtualenv section
  # pyenv         # Pyenv section
  # dotnet        # .NET section
  # ember         # Ember.js section
  # kubectl       # Kubectl context section
  # terraform     # Terraform workspace section
  # exec_time     # Execution time
  line_sep # Line break
  # battery       # Battery level and status
  # vi_mode       # Vi-mode indicator
  # jobs          # Background jobs indicator
  char # Prompt character
)

# The next line updates PATH for the Google Cloud SDK.
if [ -f '${HOME}/bin/google-cloud-sdk/path.zsh.inc' ]; then . '${HOME}/bin/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '${HOME}/bin/google-cloud-sdk/completion.zsh.inc' ]; then . '${HOME}/bin/google-cloud-sdk/completion.zsh.inc'; fi
