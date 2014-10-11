-- MySQL dump 10.13  Distrib 5.5.37, for Linux (x86_64)
--
-- Host: localhost    Database: bassbiz1_data
-- ------------------------------------------------------
-- Server version	5.5.32-cll

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_value`
--

DROP TABLE IF EXISTS `add_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_value` (
  `value_id` int(5) NOT NULL AUTO_INCREMENT,
  `qus_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `value_points` varchar(260) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `notes` varchar(260) DEFAULT NULL,
  `value_date` datetime NOT NULL,
  PRIMARY KEY (`value_id`),
  KEY `user_id` (`user_id`),
  KEY `qus_id` (`qus_id`),
  CONSTRAINT `add_value_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `google_login` (`id`),
  CONSTRAINT `add_value_ibfk_2` FOREIGN KEY (`qus_id`) REFERENCES `questions` (`qus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_value`
--

LOCK TABLES `add_value` WRITE;
/*!40000 ALTER TABLE `add_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `add_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `post_id` int(5) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL DEFAULT 'Admin',
  `post_title` varchar(255) NOT NULL,
  `post_content` longtext NOT NULL,
  `keyword` varchar(80) NOT NULL,
  `description` varchar(180) NOT NULL,
  `post_date` datetime NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` (`post_id`, `author`, `post_title`, `post_content`, `keyword`, `description`, `post_date`) VALUES (90,'Admin','Transfer pricing issues relating to royalty payment','<p>Royalty payment has been a matter of intensive discussion in India as well as internationally. Recently, the Organisation for Economic Cooperation and Development (OECD) published discussion paper on Base Erosion and Profit Shifting (BEPS) in which it is suggested that they are looking at developing &ldquo;rules to prevent BEPS by moving intangibles among group companies.</p>\r\n\r\n<p>This will involve:</p>\r\n\r\n<ul>\r\n	<li>adopting a broad and clearly delineated definition of intangibles;</li>\r\n	<li>ensuring that profits associated with the transfer and use of intangibles are appropriately allocated in accordance with (rather than divorced from) value creation;</li>\r\n	<li>developing transfer pricing rules or special measures for transfer of hard-to-value intangibles; and</li>\r\n	<li>updating the guidance on cost contribution arrangements.&rdquo;</li>\r\n</ul>\r\n\r\n<p>Obviously, identification of intangibles and payments therefore has assumed very high importance in the area of transfer pricing and international taxation. The OECD defines the term &ldquo;intangible&rdquo; as &ldquo;something which is not a physical asset or a financial asset, and which is capable of being owned or controlled for use in commercial activities&rdquo;. This term remained undefined under the Indian tax laws for a long time. By an amendment introduced in 2012 the term &ldquo;intangible property&rdquo; was defined in the Income-tax Act, which is quite broad in scope.</p>\r\n\r\n<p>Royalty is payment for the use of or right to use an intangible. Normally, an intangible is crucial for a group when it attempts to be ahead of its competitors. Protecting it becomes a top priority. Due to this, most of the time it is given to entities within the group. The burden to establish the genuineness of the payment and the arm&rsquo;s length price of the same is much heavier than many other transactions.</p>\r\n\r\n<p>In order to determine arm&rsquo;s length conditions for the use or transfer of intangibles it is important to consider as part of the comparability and functional analysis:</p>\r\n\r\n<ol>\r\n	<li>the identification of specific intangibles;</li>\r\n	<li>the identification of the party(ies) that should be entitled to retain the return derived from the use or transfer of the intangibles;</li>\r\n	<li>the nature of the controlled transactions and whether they involve the use of intangibles and/or lead to&nbsp; the transfer of intangibles between the parties; and</li>\r\n	<li>the remuneration that would be paid between independent parties for the use or transfer of such intangibles.</li>\r\n</ol>\r\n\r\n<p>In India payment of royalty has been one of the most litigated issues under transfer pricing. There have been several decisions by the Income Tax Appellate Tribunal (ITAT).</p>\r\n\r\n<p>With regard to payment of royalties, MNEs often enter into agreements allowing use of brands, trademarks, know-how, design, technology etc. by their subsidiaries or related parties in India. Such payments can be in a lump sum, periodical payments or a combination of both types of payments. It is an internationally agreed position that intellectual property, which is owned by one entity and used by another entity, generally requires a royalty payment as consideration for the use. However, the important issue in this regard is the determination of the rate of royalty. The main challenge in determining the arm&rsquo;s length royalty rate is to find comparables in the public domain with sufficient information of the type required for comparability analysis. The Indian experience suggests that it is impossible to findcomparable arm&rsquo;s length prices in most cases. The use of the Profit Split Method as an alternative is generally not a feasible option due to the lack of requisite information.</p>\r\n\r\n<p>The Indian tax administration has noticed serious difficulties in determining the rate of royalty charged for the use of brands and trademarks in certain cases. In some cases the user had borne significant costs in promoting the brand/trademark, and to promote and develop customer loyalty for the brand/trademark in a new market. In these cases, the royalty rate charged by the MNE will depend upon the cost borne by the subsidiary or related party to promote the brand and trademark and to develop customer loyalty for that brand and product. In many cases no royalty may be charged by, for example, the local subsidiary in the uncontrolled environment and the subsidiary would require arm&rsquo;s length compensation for economic ownership of marketing intangible developed by it and for enhancing the value of the brand and trademark owned by parent MNEs in an emerging market such as India.</p>\r\n\r\n<p>In many cases, Indian subsidiaries using the technical know-how of their parent company have incurred significant expenditure to customize such know-how and to enhance its value by their R&amp;D efforts. Costs of activities, such as R&amp;D activities which have contributed in enhancing the value of the know-how owned by the parent company, are generally considered by the Indian transfer pricing officer while determining the arm&rsquo;s length price of royalties for the use of technical know-how.</p>\r\n\r\n<p>The Indian transfer pricing administration has also noted significant transfer pricing issues in cases of co-branding of a new foreign brand owned by the parent MNE (a brand which is unknown to a new market such as India) with a popular Indian brand name. Since the Indian subsidiary has developed valuable Indian brands in the domestic market over a period of time, incurring very large expenditure on advertisement, marketing and sales promotion, it should be entitled to arm&rsquo;s length remuneration for contributing to increasing the value of the little known foreign brand through co-branding it with a popular Indian brand and therefore increasing market recognition.</p>\r\n\r\n<p>Happy Reading!!</p>\r\n\r\n<p>By- Raghav Gupta<br />\r\nPartner | Transfer Pricing<br />\r\nLegal Quotient Consultants<br />\r\nE: lq.raghav@gmail.com, legalquotient@gmail.com</p>\r\n\r\n<p>Thanks to http://www.caclubindia.com</p>\r\n','Transfer Pricing, Royalty, income tax, internaltional royalty payment','Transfer pricing issues relating to royalty payment','2014-10-06 20:19:51'),(91,'Admin','Reporting of FDI in India through FC-GPR','<p>Under the Foreign Direct Investments (FDI) Scheme, investments can be made in shares, mandatorily and fully convertible debentures and mandatorily and fully convertible preference shares of an Indian company by non-residents. As we are aware about the fact that there are basically 2 entry routs for investment in India; first is Automatic route and second is Government approval route.</p>\r\n\r\n<ol>\r\n	<li>Automatic Route: Under the Automatic Route, the foreign investor or the Indian company does not require any approval from the Reserve Bank or Government of India for the investment.</li>\r\n	<li>Government Route: Under the Government Route, the foreign investor or the Indian company should obtain prior approval of the Government of India (Foreign Investment Promotion Board (FIPB), Department of Economic Affairs (DEA), Ministry of Finance or Department of Industrial Policy &amp; Promotion, as the case may be) for the investment.</li>\r\n</ol>\r\n\r\n<p>Simple meaning of Foreign Direct Investment (FDI)</p>\r\n\r\n<p>In simple words Foreign Direct Investment (FDI) means monetary investment made by non-residents or by foreign entity or enterprise into an Indian entity or enterprise. A non-residents or foreign entity or enterprise may purchase equity shares in Indian companies, Indian entity or enterprise to invest their funds In other words any non-resident investment in an Indian company is foreign direct investment.</p>\r\n\r\n<p>Meaning of Indirect Foreign Direct Investment (Indirect FDI)</p>\r\n\r\n<p>Investment in Indian companies can be made both by non-resident (Foreign Entities) as well as resident Indian entities. Investment by resident Indian entities could again comprise of both resident and non-resident investment. Thus, such an Indian company would have indirect foreign investment if the Indian investing company has foreign investment in it. For more details regarding Indirect Foreign Investment kindly refer my Article available at the link below:</p>\r\n\r\n<p>Indirect Foreign Investment or Downstream Investment in India</p>\r\n\r\n<p>Regulatory framework for Reporting of Foreign Direct Investment (FDI)</p>\r\n\r\n<p>Foreign investment in India is governed by sub-section (3) of Section 6 of the Foreign Exchange Management Act, 1999 read with Notification No. FEMA 20/2000-RB dated May 3, 2000, as amended from time to time.</p>\r\n\r\n<p>Foreign Direct Investment (FDI) in India is undertaken in accordance with the FDI Policy which is formulated and announced by the Government of India. The Department of Industrial Policy and Promotion, Ministry of Commerce and Industry, Government of India issues a &ldquo;Consolidated FDI Policy Circular &rdquo; on an yearly basis on March 31 of each year (since 2010) elaborating the policy and the process in respect of FDI in India.</p>\r\n\r\n<p>The latest &ldquo;Consolidated FDI Policy Circular&rdquo; dated April 17, 2014 is available in the public domain and can be downloaded from the website of Ministry of Commerce and Industry, Department of Industrial Policy and Promotion. You may also download this circular from the link given below:</p>\r\n\r\n<p>Please find the link: Download Consolidated FDI Policy Circular by RBI--2014 (http://www.rbi.org.in/scripts/BS_ViewMasCirculardetails.aspx?id=9006)</p>\r\n\r\n<p>FDI Reporting requirements under RBI Guidelines</p>\r\n\r\n<p>As per RBI regulations, an Indian company is required to report the details of monetary investment received from foreign source to RBI whenever such Indian company issued shares / convertible debentures / preference shares/ warrants under the FDI Scheme and raised foreign direct investment.</p>\r\n\r\n<p>In other words, company receiving investment from outside India for issuing shares / convertible debentures / preference shares, should report the details of the amount of consideration (including each upfront/call payment) to the Regional Office concerned of the Reserve Bank through its AD Category I bank. This reporting to RBI is to be done, not later than 30 days from the date of receipt of money, in the Advance Reporting Form enclosed in Annex - 6. The Form for reporting can be downloaded from the Reserve Bank&#39;s website link as given below: http://www.rbi.org.in/Scripts/BSViewFemaForms.aspx</p>\r\n\r\n<p>Please find below relevant points in this regard:</p>\r\n\r\n<ol>\r\n	<li>Submission of FIRC evidencing receipt of Money: Indian companies are required to report the details of the receipt of the amount of consideration for issue of shares / convertible debentures/ warrants, through an AD Category - I bank, together with a copy of Foreign Inward remittance certificate (FIRC) evidencing the receipt of the money.&nbsp; KYC report about the non-resident investor from the overseas bank remitting the amount is also required to be attached with FIRC. The report would be acknowledged by the Regional Office concerned, which will allot a Unique Identification Number (UIN) for the amount reported.<br />\r\n	It is relevant to note that document FIRC defines the purpose of receipt of foreign money in India. Hence purpose of FIRC should be in sync with the transaction.</li>\r\n	<li>Time frame within which shares have to be issued: After receipt of money and reporting of the same through filing of FIRC, it is duty of the Indian Company to issue equity shares / convertible debentures / preference shares, as the case may be, within 180 days from the date of receipt of the inward remittance or by debit to the NRE/FCNR (B) /Escrow account of the non-resident investor.</li>\r\n	<li>Refund of Investment amount: In case, the equity instruments are not issued within 180 days from the date of receipt of the inward remittance or date of debit to the NRE/FCNR (B) account, the amount of consideration so received should be refunded immediately to the non-resident investor. This amount may be refunded either:<br />\r\n	1. by outward remittance through normal banking channels; or<br />\r\n	2. by credit to the NRE/FCNR (B)/Escrow account, as the case may be.</li>\r\n	<li>Provisions related to non-compliance: Non-compliance with the above mentioned FDI provision would be considered as a serious contravention of FEMA rules and regulations and could attract penal provisions under FEMA rules. However in exceptional cases, refund / allotment of shares for the amount of consideration outstanding beyond a period of 180 days from the date of receipt may be considered and condoned by the Reserve Bank, on the merits of the case.</li>\r\n</ol>\r\n\r\n<p><strong>Reporting of issue of shares (Filing of form FC-GPR with RBI)</strong></p>\r\n\r\n<p>After the discussion on timelines in case of Foreign Direct Investment, now it is time to discuss the form through the filing of which process of reporting of FDI to RBI is performed.</p>\r\n\r\n<ol>\r\n	<li><strong>Filing of form FC-GPR: </strong>After issue of shares / convertible debentures / convertible preference shares/warrants, the Indian company has to file Form FC-GPR, through its AD Category I bank, not later than 30 days from the date of issue of shares. The Form can also be downloaded from the Reserve Bank&#39;s website. Please find below the relevant link: http://rbidocs.rbi.org.in/rdocs/Forms/PDFs/AP110214_ANN.pdf</li>\r\n	<li><strong>Non-compliance </strong>with the above provision would be reckoned as a contravention under FEMA and could attract penal provisions.</li>\r\n	<li><strong>Annexures to be filed</strong> along with Form FC-GPR: Form FC-GPR has to be duly filled up and signed by Managing Director/Director/Secretary of the Company and submitted to the Authorised Dealer of the company, who will forward it to the concerned Regional Office of the Reserve Bank. The following documents have to be submitted along with Form FC-GPR as annexures:\r\n	<ol>\r\n		<li>A certificate from the Company Secretary of the company certifying that :\r\n		<ol>\r\n			<li>All the requirements of the Companies Act, 2013 (along with erstwhile Companies Act, 1956) have been complied with;</li>\r\n			<li>terms and conditions of the Government&rsquo;s approval, if any, have been complied with;</li>\r\n			<li>the company is eligible to issue shares under these Regulations; and</li>\r\n			<li>the company has all original certificates issued by AD banks in India evidencing receipt of amount of consideration.</li>\r\n		</ol>\r\n		</li>\r\n		<li>A certificate from SEBI registered Merchant Banker or Chartered Accountant indicating the manner of arriving at the price of the shares issued to the persons resident outside India.</li>\r\n		<li>The report of receipt of consideration as well as Form FC-GPR have to be submitted by the AD bank to the Regional Office concerned of the Reserve Bank under whose jurisdiction the registered office of the company is situated.</li>\r\n		<li>Annual Return on Foreign Liabilities and Assets</li>\r\n	</ol>\r\n	</li>\r\n</ol>\r\n\r\n<p>At the time of allotment of shares form FC-GPR is filed. However there is a provision for annual reporting as detailed below. Accordingly all Indian companies which have received FDI and/or made FDI abroad in the previous year(s) including the current year, should file the annual return on Foreign Liabilities and Assets (FLA) in the soft form to the Reserve Bank, Department of Statistics and Information Management, Mumbai by July 15 every year.</p>\r\n\r\n<p>Earlier this annual return was filed through Part B of form FC-GPR which has now been discontinued and replaced by an Annual return for Foreign Assets and Liabilities. You may download the same from the link below: http://rbidocs.rbi.org.in/rdocs/content/pdfs/APFL200612_F.pdf</p>\r\n','FC-GPR, FDI, Foreign Investment, FIRC','Procedure for reporting of FDI in India through FC-GPR','2014-10-06 20:41:23'),(92,'Admin','Duty of Registrar to Scrutinise the Documents','<div>If after filling the Requisite forms for incorporation with the Registrar of Companies along with fees, ROC is satisfied with the contents of the documents filed, ROC will issue the Certificate of incorporation in Form no.INC 11 as directed by Rule-18 of Companies (Incorporation) Rules, 2014.&nbsp;</div>\r\n\r\n<div>&nbsp;<em>Declaration at the time of commencement of business</em></div>\r\n\r\n<div>&nbsp;As per Rule-24 of Companies (Incorporation) Rules, 2014, the declaration filed by a director shall be in Form No. INC.21 along with the fee as and the contents of the form shall be verified by a Company Secretary in practice or a Chartered Accountant or a Cost Accountant in practice:</div>\r\n\r\n<div>Provided that in the case of a company requiring registration from sectoral regulators such as Reserve Bank of India, Securities and Exchange Board of India etc., the approval from such regulator shall be required.</div>\r\n\r\n<div>Pursuant to Section 11(1) (a) of the Companies Act, 2013 and Rule 24 of the Companies (Incorporation) Rules, 2014, Declaration prior to the commencement of business or exercising borrowing powers in Form No. INC.21 along with the following attachments:&nbsp;</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specimen signature in form INC.10.</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate of Registration issued by the RBI (Only in case of Non-Banking Financial Companies)/ from other regulators</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Optional attachment(s) (if any)&nbsp;&nbsp;</div>\r\n\r\n<div>&nbsp;Additional Information:</div>\r\n\r\n<div>As per Rule-16(1) of Companies (Incorporation) Rules, 2014, Particulars of every subscriber to be filed with the Registrar at the time of incorporation:&nbsp;</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name (including surname or family name) and recent Photograph affixed and scan with MOA and AOA,</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Father&rsquo;s/Mother&rsquo;s/ name,</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nationality,</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date of Birth:</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Place of Birth (District and State):</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educational qualification:</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Occupation:</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Income-tax permanent account number:</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Permanent residential address and also Present&nbsp; address (Time since residing at present address and address of previous residence address (es) if stay of present address is less 24 than one year) similarly the office/business &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;addresses.</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail id of Subscriber;</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone No. of Subscriber;</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fax no. of Subscriber (optional)</div>\r\n\r\n<div>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proof of Identity:</div>\r\n\r\n<div>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Indian Nationals:</div>\r\n\r\n<div style=\"margin-left:36pt;\">&nbsp;PAN Card (mandatory) and any one of the following:</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Voter&rsquo;s identity card</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passport copy</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Driving License copy</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique Identification Number (UIN)</div>\r\n\r\n<div>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Foreign nationals and Non Resident Indians&nbsp;</div>\r\n\r\n<div style=\"margin-left:72pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passport</div>\r\n\r\n<div>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Residential proof such as Bank Statement, Electricity Bill, Telephone / Mobile Bill:</div>\r\n\r\n<div style=\"margin-left:36pt;\">Provided that Bank statement Electricity bill, Telephone or Mobile bill shall not be more than two months old.</div>\r\n\r\n<div>e.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proof of nationality in case the subscriber is a foreign national.</div>\r\n\r\n<div style=\"margin-left:36pt;\">If the subscriber is already a Director or Promoter of a Company(s), the particulars relating to:</div>\r\n\r\n<div style=\"margin-left:108pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Company</div>\r\n\r\n<div style=\"margin-left:108pt;\">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Identity Number</div>\r\n\r\n<div style=\"margin-left:108pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;iii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether Interested as a Director or Promoter</div>\r\n\r\n<div style=\"margin-left:108pt;\">&nbsp;</div>\r\n\r\n<div style=\"margin-left:36pt;\">The specimen signature and latest photograph duly verified by the banker or notary shall be in the prescribed Form No. INC.10.</div>\r\n','ROC Filing, MCA Filing, INC 11, Rule 18 of Companies law','Duty of Registrar to Scrutinise the Documents','2014-10-07 12:01:21');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_tag`
--

DROP TABLE IF EXISTS `article_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_tag` (
  `tag_id` int(4) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tag`
--

LOCK TABLES `article_tag` WRITE;
/*!40000 ALTER TABLE `article_tag` DISABLE KEYS */;
INSERT INTO `article_tag` (`tag_id`, `tag_name`) VALUES (54,'RoC-Filing'),(55,'MCA-Filing'),(56,'CA-2013'),(57,'Income-Tax'),(58,'Service-Tax'),(59,'FDI'),(80,'india');
/*!40000 ALTER TABLE `article_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_tag_map`
--

DROP TABLE IF EXISTS `article_tag_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_tag_map` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `tag_id` int(4) NOT NULL,
  `post_id` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag_id` (`tag_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `article_tag_map_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `article_tag` (`tag_id`),
  CONSTRAINT `article_tag_map_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `article` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tag_map`
--

LOCK TABLES `article_tag_map` WRITE;
/*!40000 ALTER TABLE `article_tag_map` DISABLE KEYS */;
INSERT INTO `article_tag_map` (`id`, `tag_id`, `post_id`) VALUES (117,54,90),(158,55,91),(169,56,92);
/*!40000 ALTER TABLE `article_tag_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback_contact`
--

DROP TABLE IF EXISTS `feedback_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback_contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `who` varchar(120) NOT NULL,
  `what` varchar(120) NOT NULL,
  `name` varchar(160) NOT NULL,
  `designation` varchar(160) NOT NULL,
  `company` varchar(160) NOT NULL,
  `email` varchar(160) NOT NULL,
  `mobile` bigint(160) NOT NULL,
  `feedback` varchar(260) NOT NULL,
  `file` varchar(250) DEFAULT 'No File',
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_contact`
--

LOCK TABLES `feedback_contact` WRITE;
/*!40000 ALTER TABLE `feedback_contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `google_login`
--

DROP TABLE IF EXISTS `google_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `google_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `mobile` bigint(20) DEFAULT NULL,
  `inserted_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `google_login`
--

LOCK TABLES `google_login` WRITE;
/*!40000 ALTER TABLE `google_login` DISABLE KEYS */;
INSERT INTO `google_login` (`id`, `name`, `email`, `mobile`, `inserted_on`) VALUES (7,'Sathish','sjksathishkumar@gmail.com',2342234234,'2014-07-09 09:45:30'),(8,'basstechs','basstechsindia@gmail.com',9999898989,'2014-07-12 15:26:46'),(9,'Balaji M','balajikarthiq@gmail.com',9994788645,'2014-07-12 22:23:25'),(15,'Rinsy Ullas','rinsy.ullas@gmail.com',5685336664,'2014-07-21 18:31:27'),(19,'karthiq m','karthiq.m@gmail.com',NULL,'2014-07-23 08:09:52'),(24,'Bass Biz','bassbizindia@gmail.com',NULL,'2014-07-23 11:52:30'),(25,'VGrow Monger','vgrowmonger@gmail.com',NULL,'2014-07-23 11:58:37'),(26,'Antony B Adaikalam','aantonycma@gmail.com',9884040580,'2014-07-23 12:03:25'),(28,'Visa Ram','subash.cdm.17@gmail.com',NULL,'2014-08-19 15:04:31'),(31,'gopi ekambaram','e.gopi12@gmail.com',NULL,'2014-09-25 12:10:40'),(33,'sathish','sathish@gmail.com',NULL,'2014-09-25 14:10:53'),(34,'MUTHULAKSHMI R','muthulakshmir1993@gmail.com',8798546523,'2014-10-04 14:30:04'),(35,'','',NULL,'2014-10-05 15:39:50'),(36,'Antony B Adaikalam','barnatony@gmail.com',NULL,'2014-10-06 12:34:53'),(37,'Giri Shessun Bass Biz','girish@bassbiz.in',NULL,'2014-10-06 14:18:02');
/*!40000 ALTER TABLE `google_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `candidate_id` int(5) NOT NULL AUTO_INCREMENT,
  `job_id` varchar(130) NOT NULL,
  `name` varchar(150) NOT NULL,
  `qualification` varchar(250) NOT NULL,
  `Experience` varchar(250) NOT NULL,
  `mobile` bigint(20) NOT NULL,
  `email` varchar(160) NOT NULL,
  `resume` varchar(150) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knowledge_center`
--

DROP TABLE IF EXISTS `knowledge_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knowledge_center` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(260) NOT NULL,
  `content` longtext NOT NULL,
  `category` varchar(132) NOT NULL,
  `kc_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knowledge_center`
--

LOCK TABLES `knowledge_center` WRITE;
/*!40000 ALTER TABLE `knowledge_center` DISABLE KEYS */;
INSERT INTO `knowledge_center` (`id`, `title`, `content`, `category`, `kc_date`) VALUES (45,'Service tax income','<p>update.</p>\r\n','service_tax','2014-10-09 11:20:02'),(57,'New knowledge','<p>new knowledge updated by sathish.</p>\r\n','income_tax','2014-10-09 12:49:56'),(58,'test post','<p>test post modified.</p>\r\n','service_tax','2014-10-09 13:02:11');
/*!40000 ALTER TABLE `knowledge_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_attempts` (
  `user_id` int(11) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
INSERT INTO `login_attempts` (`user_id`, `time`) VALUES (5,'1405184580'),(5,'1405495622'),(5,'1405587551'),(5,'1406013147'),(5,'1406097497'),(5,'1406097512'),(5,'1406191041'),(5,'1406265608'),(5,'1408515291'),(5,'1411986306'),(6,'1412656743'),(6,'1412830516');
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(128) NOT NULL,
  `salt` char(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` (`id`, `username`, `email`, `password`, `salt`) VALUES (5,'kumar','kumar@gmail.com','e3b9a522ac3a5bf8fbb9fdc788d0cf1a8c24b1e78ab6eb0f216efac40cd0d03c2925e52769b76edbffc9fc323cb75d298835951da4abd31b97deeb919d548d8e','8228a9f09aeb06fbac673a163ac65fbdb62daad60a86c3729ba2ff7386d17181620866a9106b1afc708650b9c684d4be57f4bd1f262abacb35847f3e3205ee5a'),(6,'Admin','basstechsindia@gmail.com','39dcfb786d50749ed6aeadab0113f7e64d9326a065becece5d4a74377a55dc61e6c4c3df301214f0671b28ddb4ae2b21f2277f6420ad2295f5663399b8161fe4','4365d9fc2dd487beee5e3f3d1d7cab3263fc63f79e80d0f7c0b2b1837fa772fad73015dc68539a23de8ad1d3bd410a674fc54b2f399e84e95c29db0b4015f7a4');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_contact`
--

DROP TABLE IF EXISTS `partner_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(160) NOT NULL,
  `designation` varchar(160) NOT NULL,
  `company` varchar(280) NOT NULL,
  `investment` varchar(280) NOT NULL,
  `mobile` bigint(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `city` varchar(120) NOT NULL,
  `state` varchar(120) NOT NULL,
  `country` varchar(120) NOT NULL,
  `postal_code` int(120) NOT NULL,
  `reason` varchar(280) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_contact`
--

LOCK TABLES `partner_contact` WRITE;
/*!40000 ALTER TABLE `partner_contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `qus_id` int(4) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `description` varchar(280) NOT NULL,
  `user_id` int(5) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `ans_rply` tinyint(1) NOT NULL DEFAULT '0',
  `qus_date` datetime NOT NULL,
  PRIMARY KEY (`qus_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `google_login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_tag`
--

DROP TABLE IF EXISTS `questions_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_tag` (
  `tag_id` int(5) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(120) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_tag`
--

LOCK TABLES `questions_tag` WRITE;
/*!40000 ALTER TABLE `questions_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_tag_map`
--

DROP TABLE IF EXISTS `questions_tag_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_tag_map` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `tag_id` int(5) NOT NULL,
  `qus_id` int(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tag_id` (`tag_id`),
  KEY `fk_qus_id` (`qus_id`),
  CONSTRAINT `fk_qus_id` FOREIGN KEY (`qus_id`) REFERENCES `questions` (`qus_id`),
  CONSTRAINT `fk_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `questions_tag` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_tag_map`
--

LOCK TABLES `questions_tag_map` WRITE;
/*!40000 ALTER TABLE `questions_tag_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions_tag_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_contact`
--

DROP TABLE IF EXISTS `sales_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales_contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `designation` varchar(30) NOT NULL,
  `company_name` varchar(180) NOT NULL,
  `company_type` varchar(180) NOT NULL,
  `mobile` bigint(20) NOT NULL,
  `email` varchar(120) NOT NULL,
  `city` varchar(120) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(120) NOT NULL,
  `postal_code` int(10) NOT NULL,
  `requirements` varchar(260) NOT NULL,
  `description` varchar(260) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_contact`
--

LOCK TABLES `sales_contact` WRITE;
/*!40000 ALTER TABLE `sales_contact` DISABLE KEYS */;
INSERT INTO `sales_contact` (`id`, `name`, `designation`, `company_name`, `company_type`, `mobile`, `email`, `city`, `state`, `country`, `postal_code`, `requirements`, `description`, `date`) VALUES (47,'','','','Properatorship',0,' ',' ','','',0,'',' ','2014-10-10 18:52:50');
/*!40000 ALTER TABLE `sales_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bassbiz1_data'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-11 12:37:16
