# SQL

SQl is the language, MySQL is the Database

## Installation Guide in Arch
In Arch linux, there is no direct cmd to install MySQL,
instead we use MariaDB
```
### Install MariaDB
sudo pacman -S mariadb mariadb-clients

### Initialize the MariaDB data directory
sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql

### Start and enable the MariaDB service
sudo systemctl start mariadb
sudo systemctl enable mariadb

### Secure the installation
sudo mysql_secure_installation

### Run mariadb-upgrade to update system tables
sudo mariadb-upgrade

### Verify the installation
sudo mariadb -u root

### Exit the monitor with: type: EXIT;
```
