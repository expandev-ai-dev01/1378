/**
 * @schema functional
 * Business entity schema for medication reminder system
 */
CREATE SCHEMA [functional];
GO

/**
 * @table medication
 * Stores medication information for users
 * @multitenancy true
 * @softDelete true
 * @alias med
 */
CREATE TABLE [functional].[medication] (
  [idMedication] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idUser] INTEGER NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [dosage] NVARCHAR(50) NOT NULL,
  [pharmaceuticalForm] VARCHAR(20) NOT NULL,
  [administrationRoute] VARCHAR(20) NOT NULL,
  [usageInstructions] NVARCHAR(500) NULL,
  [startDate] DATE NOT NULL,
  [endDate] DATE NULL,
  [photoUrl] NVARCHAR(500) NULL,
  [initialStock] INTEGER NOT NULL,
  [currentStock] INTEGER NOT NULL,
  [stockAlertLimit] INTEGER NOT NULL,
  [observations] NVARCHAR(1000) NULL,
  [status] VARCHAR(20) NOT NULL,
  [dateCreated] DATETIME2 NOT NULL,
  [dateModified] DATETIME2 NOT NULL,
  [deleted] BIT NOT NULL DEFAULT (0)
);
GO

/**
 * @table reminder
 * Stores reminder configurations for medications
 * @multitenancy true
 * @softDelete false
 * @alias rem
 */
CREATE TABLE [functional].[reminder] (
  [idReminder] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idMedication] INTEGER NOT NULL,
  [frequencyType] VARCHAR(20) NOT NULL,
  [times] NVARCHAR(MAX) NOT NULL,
  [weekDays] NVARCHAR(MAX) NULL,
  [monthDays] NVARCHAR(MAX) NULL,
  [specificDates] NVARCHAR(MAX) NULL,
  [doseInterval] INTEGER NULL,
  [quantityPerDose] NUMERIC(5, 1) NOT NULL,
  [notificationSound] VARCHAR(20) NOT NULL,
  [advanceTime] INTEGER NULL,
  [repeatNotification] BIT NOT NULL,
  [repeatInterval] INTEGER NULL,
  [maxRepetitions] INTEGER NULL,
  [status] VARCHAR(20) NOT NULL,
  [dateCreated] DATETIME2 NOT NULL,
  [dateModified] DATETIME2 NOT NULL
);
GO

/**
 * @table notification
 * Stores notification instances for reminders
 * @multitenancy true
 * @softDelete false
 * @alias ntf
 */
CREATE TABLE [functional].[notification] (
  [idNotification] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idReminder] INTEGER NOT NULL,
  [idMedication] INTEGER NOT NULL,
  [scheduledDateTime] DATETIME2 NOT NULL,
  [sentDateTime] DATETIME2 NULL,
  [status] VARCHAR(20) NOT NULL,
  [repetitionNumber] INTEGER NOT NULL,
  [confirmationDateTime] DATETIME2 NULL,
  [userAction] VARCHAR(20) NULL,
  [postponeTime] INTEGER NULL,
  [quantityTaken] NUMERIC(5, 1) NULL,
  [doseObservation] NVARCHAR(500) NULL,
  [idConfirmer] INTEGER NULL,
  [dateCreated] DATETIME2 NOT NULL
);
GO

/**
 * @table administrationHistory
 * Stores complete history of medication administration
 * @multitenancy true
 * @softDelete false
 * @alias adh
 */
CREATE TABLE [functional].[administrationHistory] (
  [idRecord] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idMedication] INTEGER NOT NULL,
  [idNotification] INTEGER NULL,
  [recordDateTime] DATETIME2 NOT NULL,
  [medicationDateTime] DATETIME2 NOT NULL,
  [recordType] VARCHAR(20) NOT NULL,
  [quantityTaken] NUMERIC(5, 1) NOT NULL,
  [observation] NVARCHAR(500) NULL,
  [idRegistrar] INTEGER NOT NULL,
  [delay] INTEGER NULL
);
GO

/**
 * @table caregiverSharing
 * Stores caregiver sharing configurations
 * @multitenancy true
 * @softDelete false
 * @alias cgs
 */
CREATE TABLE [functional].[caregiverSharing] (
  [idSharing] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idPatient] INTEGER NOT NULL,
  [idCaregiver] INTEGER NULL,
  [caregiverEmail] NVARCHAR(200) NOT NULL,
  [caregiverName] NVARCHAR(100) NOT NULL,
  [caregiverPhone] VARCHAR(20) NULL,
  [inviteDate] DATETIME2 NOT NULL,
  [acceptanceDate] DATETIME2 NULL,
  [status] VARCHAR(20) NOT NULL,
  [inviteExpirationDate] DATETIME2 NOT NULL,
  [permissions] NVARCHAR(MAX) NOT NULL,
  [sharedMedications] NVARCHAR(MAX) NOT NULL,
  [receiveNotifications] BIT NOT NULL,
  [delayNotificationTime] INTEGER NULL
);
GO

/**
 * @table stockAlert
 * Stores stock alerts for medications
 * @multitenancy true
 * @softDelete false
 * @alias sta
 */
CREATE TABLE [functional].[stockAlert] (
  [idAlert] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idMedication] INTEGER NOT NULL,
  [alertType] VARCHAR(20) NOT NULL,
  [generationDate] DATETIME2 NOT NULL,
  [status] VARCHAR(20) NOT NULL,
  [resolutionDate] DATETIME2 NULL,
  [message] NVARCHAR(500) NOT NULL,
  [idReplenishment] INTEGER NULL
);
GO

/**
 * @table stockReplenishment
 * Stores stock replenishment records
 * @multitenancy true
 * @softDelete false
 * @alias srp
 */
CREATE TABLE [functional].[stockReplenishment] (
  [idReplenishment] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [idMedication] INTEGER NOT NULL,
  [quantityAdded] INTEGER NOT NULL,
  [replenishmentDate] DATETIME2 NOT NULL,
  [expirationDate] DATE NULL,
  [batchNumber] NVARCHAR(50) NULL,
  [unitPrice] NUMERIC(18, 6) NULL,
  [purchaseLocation] NVARCHAR(100) NULL,
  [observation] NVARCHAR(500) NULL,
  [idRegistrar] INTEGER NOT NULL
);
GO

/**
 * @table report
 * Stores generated reports
 * @multitenancy true
 * @softDelete false
 * @alias rpt
 */
CREATE TABLE [functional].[report] (
  [idReport] INTEGER IDENTITY(1, 1) NOT NULL,
  [idAccount] INTEGER NOT NULL,
  [reportType] VARCHAR(20) NOT NULL,
  [idMedication] INTEGER NULL,
  [startDate] DATE NOT NULL,
  [endDate] DATE NOT NULL,
  [outputFormat] VARCHAR(10) NOT NULL,
  [generationDate] DATETIME2 NOT NULL,
  [idUser] INTEGER NOT NULL,
  [fileUrl] NVARCHAR(500) NULL,
  [reportData] NVARCHAR(MAX) NOT NULL,
  [sharedWith] NVARCHAR(MAX) NULL,
  [recipientEmail] NVARCHAR(200) NULL
);
GO

/**
 * @primaryKey pkMedication
 * @keyType Object
 */
ALTER TABLE [functional].[medication]
ADD CONSTRAINT [pkMedication] PRIMARY KEY CLUSTERED ([idMedication]);
GO

/**
 * @primaryKey pkReminder
 * @keyType Object
 */
ALTER TABLE [functional].[reminder]
ADD CONSTRAINT [pkReminder] PRIMARY KEY CLUSTERED ([idReminder]);
GO

/**
 * @primaryKey pkNotification
 * @keyType Object
 */
ALTER TABLE [functional].[notification]
ADD CONSTRAINT [pkNotification] PRIMARY KEY CLUSTERED ([idNotification]);
GO

/**
 * @primaryKey pkAdministrationHistory
 * @keyType Object
 */
ALTER TABLE [functional].[administrationHistory]
ADD CONSTRAINT [pkAdministrationHistory] PRIMARY KEY CLUSTERED ([idRecord]);
GO

/**
 * @primaryKey pkCaregiverSharing
 * @keyType Object
 */
ALTER TABLE [functional].[caregiverSharing]
ADD CONSTRAINT [pkCaregiverSharing] PRIMARY KEY CLUSTERED ([idSharing]);
GO

/**
 * @primaryKey pkStockAlert
 * @keyType Object
 */
ALTER TABLE [functional].[stockAlert]
ADD CONSTRAINT [pkStockAlert] PRIMARY KEY CLUSTERED ([idAlert]);
GO

/**
 * @primaryKey pkStockReplenishment
 * @keyType Object
 */
ALTER TABLE [functional].[stockReplenishment]
ADD CONSTRAINT [pkStockReplenishment] PRIMARY KEY CLUSTERED ([idReplenishment]);
GO

/**
 * @primaryKey pkReport
 * @keyType Object
 */
ALTER TABLE [functional].[report]
ADD CONSTRAINT [pkReport] PRIMARY KEY CLUSTERED ([idReport]);
GO

/**
 * @foreignKey fkMedication_Account
 * @target subscription.account
 * @tenancy true
 */
ALTER TABLE [functional].[medication]
ADD CONSTRAINT [fkMedication_Account] FOREIGN KEY ([idAccount])
REFERENCES [subscription].[account]([idAccount]);
GO

/**
 * @foreignKey fkReminder_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[reminder]
ADD CONSTRAINT [fkReminder_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @foreignKey fkNotification_Reminder
 * @target functional.reminder
 */
ALTER TABLE [functional].[notification]
ADD CONSTRAINT [fkNotification_Reminder] FOREIGN KEY ([idReminder])
REFERENCES [functional].[reminder]([idReminder]);
GO

/**
 * @foreignKey fkNotification_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[notification]
ADD CONSTRAINT [fkNotification_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @foreignKey fkAdministrationHistory_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[administrationHistory]
ADD CONSTRAINT [fkAdministrationHistory_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @foreignKey fkAdministrationHistory_Notification
 * @target functional.notification
 */
ALTER TABLE [functional].[administrationHistory]
ADD CONSTRAINT [fkAdministrationHistory_Notification] FOREIGN KEY ([idNotification])
REFERENCES [functional].[notification]([idNotification]);
GO

/**
 * @foreignKey fkStockAlert_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[stockAlert]
ADD CONSTRAINT [fkStockAlert_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @foreignKey fkStockAlert_Replenishment
 * @target functional.stockReplenishment
 */
ALTER TABLE [functional].[stockAlert]
ADD CONSTRAINT [fkStockAlert_Replenishment] FOREIGN KEY ([idReplenishment])
REFERENCES [functional].[stockReplenishment]([idReplenishment]);
GO

/**
 * @foreignKey fkStockReplenishment_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[stockReplenishment]
ADD CONSTRAINT [fkStockReplenishment_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @foreignKey fkReport_Medication
 * @target functional.medication
 */
ALTER TABLE [functional].[report]
ADD CONSTRAINT [fkReport_Medication] FOREIGN KEY ([idMedication])
REFERENCES [functional].[medication]([idMedication]);
GO

/**
 * @check chkMedication_PharmaceuticalForm
 * @enum {comprimido} Tablet
 * @enum {capsula} Capsule
 * @enum {liquido} Liquid
 * @enum {injecao} Injection
 * @enum {pomada} Ointment
 * @enum {spray} Spray
 * @enum {gotas} Drops
 * @enum {outros} Others
 */
ALTER TABLE [functional].[medication]
ADD CONSTRAINT [chkMedication_PharmaceuticalForm] CHECK ([pharmaceuticalForm] IN ('comprimido', 'capsula', 'liquido', 'injecao', 'pomada', 'spray', 'gotas', 'outros'));
GO

/**
 * @check chkMedication_AdministrationRoute
 * @enum {oral} Oral
 * @enum {topica} Topical
 * @enum {intravenosa} Intravenous
 * @enum {intramuscular} Intramuscular
 * @enum {subcutanea} Subcutaneous
 * @enum {inalatoria} Inhalation
 * @enum {oftalmica} Ophthalmic
 * @enum {retal} Rectal
 * @enum {outra} Other
 */
ALTER TABLE [functional].[medication]
ADD CONSTRAINT [chkMedication_AdministrationRoute] CHECK ([administrationRoute] IN ('oral', 'topica', 'intravenosa', 'intramuscular', 'subcutanea', 'inalatoria', 'oftalmica', 'retal', 'outra'));
GO

/**
 * @check chkMedication_Status
 * @enum {ativo} Active
 * @enum {inativo} Inactive
 * @enum {concluido} Completed
 */
ALTER TABLE [functional].[medication]
ADD CONSTRAINT [chkMedication_Status] CHECK ([status] IN ('ativo', 'inativo', 'concluido'));
GO

/**
 * @check chkReminder_FrequencyType
 * @enum {diario} Daily
 * @enum {semanal} Weekly
 * @enum {mensal} Monthly
 * @enum {especifico} Specific
 */
ALTER TABLE [functional].[reminder]
ADD CONSTRAINT [chkReminder_FrequencyType] CHECK ([frequencyType] IN ('diario', 'semanal', 'mensal', 'especifico'));
GO

/**
 * @check chkReminder_NotificationSound
 * @enum {padrao} Default
 * @enum {alarme} Alarm
 * @enum {suave} Soft
 * @enum {personalizado} Custom
 */
ALTER TABLE [functional].[reminder]
ADD CONSTRAINT [chkReminder_NotificationSound] CHECK ([notificationSound] IN ('padrao', 'alarme', 'suave', 'personalizado'));
GO

/**
 * @check chkReminder_Status
 * @enum {ativo} Active
 * @enum {inativo} Inactive
 * @enum {pausado} Paused
 */
ALTER TABLE [functional].[reminder]
ADD CONSTRAINT [chkReminder_Status] CHECK ([status] IN ('ativo', 'inativo', 'pausado'));
GO

/**
 * @check chkNotification_Status
 * @enum {agendada} Scheduled
 * @enum {enviada} Sent
 * @enum {confirmada} Confirmed
 * @enum {ignorada} Ignored
 * @enum {atrasada} Delayed
 */
ALTER TABLE [functional].[notification]
ADD CONSTRAINT [chkNotification_Status] CHECK ([status] IN ('agendada', 'enviada', 'confirmada', 'ignorada', 'atrasada'));
GO

/**
 * @check chkNotification_UserAction
 * @enum {tomei} Taken
 * @enum {pular} Skip
 * @enum {adiar} Postpone
 */
ALTER TABLE [functional].[notification]
ADD CONSTRAINT [chkNotification_UserAction] CHECK ([userAction] IN ('tomei', 'pular', 'adiar'));
GO

/**
 * @check chkAdministrationHistory_RecordType
 * @enum {programado} Scheduled
 * @enum {manual} Manual
 * @enum {perdido} Missed
 */
ALTER TABLE [functional].[administrationHistory]
ADD CONSTRAINT [chkAdministrationHistory_RecordType] CHECK ([recordType] IN ('programado', 'manual', 'perdido'));
GO

/**
 * @check chkCaregiverSharing_Status
 * @enum {pendente} Pending
 * @enum {ativo} Active
 * @enum {revogado} Revoked
 * @enum {expirado} Expired
 */
ALTER TABLE [functional].[caregiverSharing]
ADD CONSTRAINT [chkCaregiverSharing_Status] CHECK ([status] IN ('pendente', 'ativo', 'revogado', 'expirado'));
GO

/**
 * @check chkStockAlert_AlertType
 * @enum {estoque_baixo} Low Stock
 * @enum {estoque_zerado} Out of Stock
 * @enum {validade_proxima} Expiration Soon
 * @enum {validade_expirada} Expired
 */
ALTER TABLE [functional].[stockAlert]
ADD CONSTRAINT [chkStockAlert_AlertType] CHECK ([alertType] IN ('estoque_baixo', 'estoque_zerado', 'validade_proxima', 'validade_expirada'));
GO

/**
 * @check chkStockAlert_Status
 * @enum {pendente} Pending
 * @enum {visualizado} Viewed
 * @enum {resolvido} Resolved
 * @enum {ignorado} Ignored
 */
ALTER TABLE [functional].[stockAlert]
ADD CONSTRAINT [chkStockAlert_Status] CHECK ([status] IN ('pendente', 'visualizado', 'resolvido', 'ignorado'));
GO

/**
 * @check chkReport_ReportType
 * @enum {adesao} Adherence
 * @enum {historico} History
 * @enum {estoque} Stock
 * @enum {custos} Costs
 */
ALTER TABLE [functional].[report]
ADD CONSTRAINT [chkReport_ReportType] CHECK ([reportType] IN ('adesao', 'historico', 'estoque', 'custos'));
GO

/**
 * @check chkReport_OutputFormat
 * @enum {pdf} PDF
 * @enum {csv} CSV
 * @enum {app} App
 */
ALTER TABLE [functional].[report]
ADD CONSTRAINT [chkReport_OutputFormat] CHECK ([outputFormat] IN ('pdf', 'csv', 'app'));
GO

/**
 * @index ixMedication_Account
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixMedication_Account]
ON [functional].[medication]([idAccount])
WHERE [deleted] = 0;
GO

/**
 * @index ixMedication_Account_Status
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixMedication_Account_Status]
ON [functional].[medication]([idAccount], [status])
WHERE [deleted] = 0;
GO

/**
 * @index ixReminder_Medication
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixReminder_Medication]
ON [functional].[reminder]([idMedication]);
GO

/**
 * @index ixReminder_Account_Status
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixReminder_Account_Status]
ON [functional].[reminder]([idAccount], [status]);
GO

/**
 * @index ixNotification_Reminder
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixNotification_Reminder]
ON [functional].[notification]([idReminder]);
GO

/**
 * @index ixNotification_Account_Status
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixNotification_Account_Status]
ON [functional].[notification]([idAccount], [status]);
GO

/**
 * @index ixAdministrationHistory_Medication
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixAdministrationHistory_Medication]
ON [functional].[administrationHistory]([idMedication]);
GO

/**
 * @index ixAdministrationHistory_Account_Date
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixAdministrationHistory_Account_Date]
ON [functional].[administrationHistory]([idAccount], [medicationDateTime]);
GO

/**
 * @index ixCaregiverSharing_Patient
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixCaregiverSharing_Patient]
ON [functional].[caregiverSharing]([idAccount], [idPatient]);
GO

/**
 * @index ixCaregiverSharing_Caregiver
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixCaregiverSharing_Caregiver]
ON [functional].[caregiverSharing]([idAccount], [idCaregiver]);
GO

/**
 * @index ixStockAlert_Medication
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixStockAlert_Medication]
ON [functional].[stockAlert]([idMedication]);
GO

/**
 * @index ixStockAlert_Account_Status
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixStockAlert_Account_Status]
ON [functional].[stockAlert]([idAccount], [status]);
GO

/**
 * @index ixStockReplenishment_Medication
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixStockReplenishment_Medication]
ON [functional].[stockReplenishment]([idMedication]);
GO

/**
 * @index ixReport_Account
 * @type ForeignKey
 */
CREATE NONCLUSTERED INDEX [ixReport_Account]
ON [functional].[report]([idAccount]);
GO