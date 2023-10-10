from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator

class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.CharField(max_length=12, unique=True, validators=[MinLengthValidator(12), MaxLengthValidator(12)])
    name = models.CharField(max_length=255)
    fingerprint_1 = models.TextField()
    fingerprint_2 = models.TextField()
    fingerprint_3 = models.TextField()
    fingerprint_4 = models.TextField()
    fingerprint_5 = models.TextField()
    fingerprint_6 = models.TextField()
    fingerprint_7 = models.TextField()
    fingerprint_8 = models.TextField()
    fingerprint_9 = models.TextField()
    fingerprint_10 = models.TextField()
    face_path = models.TextField()
    address = models.TextField()

    def __str__(self):
        return self.name

class ProfileSet(models.Model):
    name = models.CharField(max_length=255)
    profiles = models.ManyToManyField(Profile)

    def __str__(self):
        return self.name
    



    # <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
    #   <TreeView
    #     aria-label="file system navigator"
    #     defaultCollapseIcon={<ExpandMoreIcon />}
    #     defaultExpandIcon={<ChevronRightIcon />}
    #   >
    #     <TreeItem nodeId="1" label="UID">
    #       <TreeItem nodeId="2" label="Demographics" />
    #       <TreeItem nodeId="3" label="Biometrics" >
    #         <TreeItem nodeId="4" label="Face"/>
    #         <TreeItem nodeId="5" label="Fingerprint1"/>
    #         <TreeItem nodeId="5" label="Fingerprint2"/>
    #         <TreeItem nodeId="5" label="Fingerprint3"/>
    #         <TreeItem nodeId="5" label="Fingerprint4"/>
    #         <TreeItem nodeId="5" label="Fingerprint5"/>
    #         <TreeItem nodeId="5" label="Fingerprint6"/>
    #         <TreeItem nodeId="5" label="Fingerprint7"/>
    #         <TreeItem nodeId="5" label="Fingerprint8"/>
    #         <TreeItem nodeId="5" label="Fingerprint9"/>
    #         <TreeItem nodeId="5" label="Fingerprint10"/>
    #       </TreeItem>
    #     </TreeItem>
    #   </TreeView>
    # </Box>