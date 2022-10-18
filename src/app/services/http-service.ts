/*
 * Automatically generated by Magic
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICrudEntity, ICrdEntity, ICrEntity, IREntity, IRudEntity, IRuEntity, ICruEntity, IRdEntity } from './interfaces/crud-interfaces'
import { ILog } from './interfaces/log-interface'
import { StatusResponse } from './models/status-response';
import { CreateResponse } from './models/create-response';
import { CountResponse } from './models/count-response';
import { UpdateResponse } from './models/update-response';
import { DeleteResponse } from './models/delete-response';

/**
 * Your main HTTP service for invoking CRUD methods in your backend.
 * 
 * This class encapsulates the generated HTTP endpoints for your app.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   * Creates an instance of your service.
   * 
   * @param httpClient What HTTP client to use for invocations towards your backend
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Returns the log instance, allowing you to create server-side
   * log entries.
   */
  get log() : ILog {

    return {

      debug: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/system/logging/log', {
            type: 'debug',
            content
        }).subscribe({
          next: (res: StatusResponse) => {
            console.log('Info item successfully logged');
          },
          error: (error: any) => {
            console.error(error.error.message);
          }});
      },

      info: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/system/logging/log', {
            type: 'info',
            content
        }).subscribe({
          next: (res: StatusResponse) => {
            console.log('Info item successfully logged');
          },
          error: (error: any) => {
            console.error(error.error.message);
          }});
      },

      error: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/system/logging/log', {
            type: 'error',
            content
        }).subscribe({
          next: (res: StatusResponse) => {
            console.log('Info item successfully logged');
          },
          error: (error: any) => {
            console.error(error.error.message);
          }});
      },

      fatal: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/system/logging/log', {
            type: 'fatal',
            content
        }).subscribe({
          next: (res: StatusResponse) => {
          console.log('Info item successfully logged');
          },
          error: (error: any) => {
            console.error(error.error.message);
          }});
      }
    }
  }

  get kpi() {
    return this.httpClient.get<any[]>(
      environment.apiUrl +
      'magic/modules/robo-crm/execute-kpi');
  }

  /*
   * HTTP REST methods your backend exposes.
   * 
   * These parts is exposed such that each table returns an ICrudEntity
   * or an ICrdEntity, depending upon whether or not the endpoint group
   * contains an update method or not.
   */

  /**
   * HTTP CRUD service methods for your 'robo_crm_accounts' entities.
   */
  get robo_crm_accounts() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/accounts' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/accounts' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/accounts-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/accounts',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/accounts',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_activities' entities.
   */
  get robo_crm_activities() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activities' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activities' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activities-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activities',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activities',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_activities' entities.
   */
   get robo_crm_users() {
    return {
      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/users' +
          this.getQueryArgs(filter));
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_activity_types' entities.
   */
  get robo_crm_activity_types() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activity_types' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activity_types' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activity_types-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activity_types',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/activities/activity_types',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_contacts' entities.
   */
  get robo_crm_contacts() {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts',
          args);
      },

      distinctSources: () => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/sources');
      },

      extraInformation: (contact_id: number) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/contacts/contacts-extra?contact_id=' + contact_id);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_notifications' entities.
   */
  get robo_crm_notifications() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/notifications' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/notifications' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/notifications-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/notifications',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/notifications',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_status' entities.
   */
  get robo_crm_status() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/status' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/status' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/status-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/status',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/accounts/status',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_blaster_email_templates' entities.
   */
   get robo_crm_blaster_email_templates() : ICrudEntity {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/email_templates' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/email_templates' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/email_templates-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/email_templates',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/email_templates',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'robo_crm_blaster_email' entities.
   */
   get robo_crm_blaster_emails() {
    return {

      delete: (filter: any) => {
        return this.httpClient.delete<any>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/emails' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/emails' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/emails-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/emails',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/emails',
          args);
      },

      blast: (payload: any) => {
        return this.httpClient.post<any>(
          environment.apiUrl +
          'magic/modules/robo-crm/blaster/blast',
          payload);
      }
    }
  }


  /**
   * Uploads an image to your backend.
   *
   * @param url Backend relative endpoint URL
   * @param content Base64 encoded image data
   * @param type Type of image, such as 'jpeg', 'png', etc
   * @param old_file Optional name of old file, which if existing and specified will be deleted
   */
   public uploadImage(
     url: string,
     content: string,
     type: string,
     old_file?: string) {

    // Invoking backend with the specified arguments.
    // NOTICE! If you want to handle image uploading, you'll need a backend endpoint.
    if (url.indexOf('/') !== 0) {
      url = '/' + url;
    }
    return this.httpClient.put<any>(`magic/modules${url}`, {
      content,
      type,
      old_file,
    });
  }

  /**
   * Uploads a file to your backend.
   *
   * @param url Backend relative endpoint URL
   * @param file File you want to upload
   * @param old_file Optional name of old file, which if existing and specified will be deleted
   */
   public uploadFile(url: string, file: any, old_file: string = null) {

    // Invoking backend with a form data object containing file.
    // NOTICE! If you want to handle file uploading, you'll need a backend endpoint.
    if (url.indexOf('/') !== 0) {
      url = '/' + url;
    }
    const formData: FormData = new FormData();
    formData.append('file', file);
    if (old_file) {
      formData.append('old_file', old_file);
    }
    return this.httpClient.put<any>(`magic/modules${url}`, formData);
  }

  /*
   * Creates QUERY parameters from the specified "args" argument given.
   *
   * Used by CRUD service methods to create the correct QUERY parameters
   * during invocations towards your backend.
   */
  private getQueryArgs(args: any) {
    let result = '';
    for(const idx in args) {
      if (Object.prototype.hasOwnProperty.call(args, idx)) {
        const idxFilter = args[idx];
        if (idxFilter !== null && idxFilter !== undefined && idxFilter !== '') {
          if (result === '') {
            result += '?';
          } else {
            result += '&';
          }
          if (idx.endsWith('.like')) {
            result += idx + '=' + encodeURIComponent(idxFilter + '%');
          } else {
            result += idx + '=' + encodeURIComponent(idxFilter);
          }
        }
      }
    }
    return result;
  }
}
