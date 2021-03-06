<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc1979ea69b1d8f4059205f2b1ddf2ab9
{
    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'phpseclib\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'phpseclib\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpseclib/phpseclib/phpseclib',
        ),
    );

    public static $classMap = array (
        'MCryptWrapper' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp_mcrypt_wrapper.php',
        'OpenPGP' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_AsymmetricSessionKeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_CompressedDataPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_Crypt_RSA' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp_crypt_rsa.php',
        'OpenPGP_Crypt_Symmetric' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp_crypt_symmetric.php',
        'OpenPGP_EncryptedDataPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_ExperimentalPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_IntegrityProtectedDataPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_LiteralDataPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_MarkerPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_Message' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_ModificationDetectionCodePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_OnePassSignaturePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_Packet' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_PublicKeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_PublicSubkeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_S2K' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SecretKeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SecretSubkeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_EmbeddedSignaturePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_ExportableCertificationPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_FeaturesPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_IssuerPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_KeyExpirationTimePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_KeyFlagsPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_KeyServerPreferencesPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_NotationDataPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PolicyURIPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PreferredCompressionAlgorithmsPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PreferredHashAlgorithmsPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PreferredKeyServerPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PreferredSymmetricAlgorithmsPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_PrimaryUserIDPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_ReasonforRevocationPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_RegularExpressionPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_RevocablePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_RevocationKeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_SignatureCreationTimePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_SignatureExpirationTimePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_SignatureTargetPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_SignersUserIDPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_Subpacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SignaturePacket_TrustSignaturePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_SymmetricSessionKeyPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_TrustPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_UserAttributePacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
        'OpenPGP_UserIDPacket' => __DIR__ . '/..' . '/singpolyma/openpgp-php/lib/openpgp.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc1979ea69b1d8f4059205f2b1ddf2ab9::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc1979ea69b1d8f4059205f2b1ddf2ab9::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc1979ea69b1d8f4059205f2b1ddf2ab9::$classMap;

        }, null, ClassLoader::class);
    }
}
