# SQL

SQL is the language, MySQL is the Database

## Installation Guide in linux

<details>
<sumamry>Cmds to install MariaDB</summary>

In Arch linux, there is no direct cmd to install MySQL,
instead we use MariaDB

```
# Install MariaDB
sudo pacman -S mariadb mariadb-clients

# Initialize the MariaDB data directory
sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql

# Start and enable the MariaDB service
sudo systemctl enable mariadb
sudo systemctl start mariadb

# Secure the installation
sudo mysql_secure_installation

# Run mariadb-upgrade to update system tables
sudo mariadb-upgrade

# Verify the installation
sudo mariadb -u root

# Run MariaDB in terminal
mariadb

# Exit the terminal type:
EXIT
```

</details>

## Syllabus
