-- CreateTable
CREATE TABLE `company` (
    `company_id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(255) NULL,
    `is_active` TINYINT NULL,
    `quota` INTEGER NOT NULL,
    `company_level_id` INTEGER NULL,
    `business_type` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `tax_id` VARCHAR(45) NULL,
    `contact_name` VARCHAR(255) NULL,
    `phone_number` VARCHAR(45) NULL,
    `remark` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,

    PRIMARY KEY (`company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_level` (
    `level_id` INTEGER NOT NULL,
    `level_name` VARCHAR(45) NULL,

    PRIMARY KEY (`level_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `component_part` (
    `component_part_id` INTEGER NOT NULL,
    `component_partl_name` VARCHAR(255) NULL,
    `component_part_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NULL,
    `creater_user_id` VARCHAR(45) NULL,

    PRIMARY KEY (`component_part_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `machine` (
    `machine_id` INTEGER NOT NULL,
    `machine_name` VARCHAR(45) NULL,
    `machine_details` VARCHAR(45) NULL,
    `station_id` INTEGER NULL,
    `updater_user_id` INTEGER NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `company_company_id` INTEGER NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`machine_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mechine_part` (
    `mechine_part_id` INTEGER NOT NULL,
    `mechine_part_name` VARCHAR(255) NULL,
    `mechine_part_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `is_active` TINYINT NULL,
    `machine_id` INTEGER NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `company_company_id` INTEGER NOT NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`mechine_part_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obj_ctrl_life_cycle` (
    `obj_ctrl_life_cycle_id` INTEGER NOT NULL,
    `obj_ctrl_life_cycle_name` VARCHAR(255) NULL,
    `obj_ctrl_life_cycle_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NULL,
    `object_ctrl_uuid` VARCHAR(45) NULL,

    PRIMARY KEY (`obj_ctrl_life_cycle_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obj_ctrl_performance` (
    `obj_ctrl_performance_id` INTEGER NOT NULL,
    `object_ctrl_uuid` VARCHAR(45) NOT NULL,
    `obj_ctrl_performance_name` VARCHAR(255) NULL,
    `obj_ctrl_performance_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NOT NULL,

    PRIMARY KEY (`obj_ctrl_performance_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obj_ctrl_process` (
    `obj_ctrl_process_id` INTEGER NOT NULL,
    `obj_ctrl_process_name` VARCHAR(255) NULL,
    `obj_ctrl_process_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NULL,
    `object_ctrl_uuid` VARCHAR(45) NULL,

    PRIMARY KEY (`obj_ctrl_process_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organization` (
    `organization_id` INTEGER NOT NULL,
    `organization_name` VARCHAR(255) NULL,
    `details` TEXT NULL,
    `company_id` INTEGER NULL,
    `updater` VARCHAR(255) NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`organization_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page` (
    `page_id` INTEGER NOT NULL,
    `page_name` VARCHAR(255) NULL,

    PRIMARY KEY (`page_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant` (
    `plant_id` INTEGER NOT NULL,
    `plant_details` TEXT NULL,
    `plant_name` VARCHAR(255) NULL,
    `updater_user_id` INTEGER NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`plant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `role_id` INTEGER NOT NULL,
    `role_name` VARCHAR(50) NULL,

    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shift_work` (
    `shift_work_id` INTEGER NOT NULL,
    `shift_work_name` VARCHAR(255) NULL,
    `shift_work_details` TEXT NULL,
    `shift_work_time_start` TIME(0) NULL,
    `shift_work_time_end` TIME(0) NULL,
    `company_company_id` INTEGER NULL,
    `updater_user_id` INTEGER NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `creater_user_id` VARCHAR(45) NULL,

    PRIMARY KEY (`shift_work_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `station` (
    `station_id` INTEGER NOT NULL,
    `station_name` VARCHAR(255) NULL,
    `station_details` VARCHAR(255) NULL,
    `work_group_id` INTEGER NULL,
    `updater_user_id` INTEGER NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `company_company_id` INTEGER NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`station_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tool_part` (
    `tool_part_id` INTEGER NOT NULL,
    `tool_part_name` VARCHAR(255) NULL,
    `tool_part_details` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `updater_user_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `company_company_id` INTEGER NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`tool_part_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL,
    `eid` VARCHAR(45) NULL,
    `username` VARCHAR(255) NULL,
    `password` VARCHAR(45) NULL,
    `email` VARCHAR(255) NULL,
    `role_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `first_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `phone_number` VARCHAR(15) NULL,
    `profile_img` TEXT NULL,
    `remark` TEXT NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `usercol` VARCHAR(45) NULL,
    `organization_id` INTEGER NULL,
    `is_active` TINYINT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_permission` (
    `permission_id` INTEGER NOT NULL AUTO_INCREMENT,
    `access_level` VARCHAR(45) NULL,
    `user_user_id` INTEGER NULL,
    `page_page_id` INTEGER NULL,

    PRIMARY KEY (`permission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work_group` (
    `work_group_id` INTEGER NOT NULL,
    `work_group_name` VARCHAR(255) NULL,
    `work_group_details` TEXT NULL,
    `plant_id` INTEGER NULL,
    `user_user_id` INTEGER NULL,
    `create_date` DATETIME(0) NULL,
    `update_date` TIMESTAMP(0) NULL,
    `company_company_id` INTEGER NULL,
    `is_active` TINYINT NULL,
    `creater_user_id` INTEGER NULL,

    PRIMARY KEY (`work_group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
