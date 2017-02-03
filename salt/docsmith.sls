docsmith_system_dependencies:
  pkg.installed:
    - pkgs:
      - git
      - ruby
      - ruby-dev
      - build-essential

docsmith_thor:
  gem.installed:
    - name: thor

docsmith_bundler:
  gem.installed:
    - name: bundler

github.com:
  ssh_known_hosts:
    - present

docsmith_thor_init:
  cmd.run:
    - name: thor init
    - cwd: /vagrant
    - runas: vagrant