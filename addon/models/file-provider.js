import DS from 'ember-data';

import OsfModel from './osf-model';
import FileItemMixin from 'ember-osf/mixins/file-item';

/**
 * @module ember-osf
 * @submodule models
 */

/**
 * Model for OSF APIv2 file providers. Primarily used in relationship fields.
 * This model is used for basic file provider metadata. To interact with file contents directly, see the `file-manager` service.
 * For field and usage information, see:
 * * https://api.osf.io/v2/docs/#!/v2/Node_Providers_List_GET
 * * https://api.osf.io/v2/docs/#!/v2/Node_Provider_Detail_GET
 * * https://api.osf.io/v2/docs/#!/v2/Registration_Providers_List_GET
 * @class FileProvider
 */
export default OsfModel.extend(FileItemMixin, {
    name: DS.attr('string'),
    kind: DS.attr('string'),
    path: DS.attr('string'),
    provider: DS.attr('string'),
    files: DS.hasMany('file'),
    node: DS.belongsTo('node')
});
