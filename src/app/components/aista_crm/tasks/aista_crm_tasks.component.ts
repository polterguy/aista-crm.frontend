/*
 * Automatically generated by Magic
 */

// Angular specific components
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GridComponent } from '@app/base/grid.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

// Application specific components
import { EditAista_crm_tasksComponent } from './modals/edit.aista_crm_tasks.component';
import { HttpService } from 'src/app/services/http-service';
import { AuthService } from 'src/app/services/auth-service';

/**
 * "Datagrid" component for displaying instance of Tasks
 * entities from your HTTP REST backend.
 */
@Component({
  selector: 'app-aista_crm_tasks',
  templateUrl: './aista_crm_tasks.component.html',
  styleUrls: ['./aista_crm_tasks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', opacity: '0'})),
      state('expanded', style({height: '*', opacity: '1'})),
      transition('expanded <=> collapsed', animate('0.75s cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class Aista_crm_tasksComponent extends GridComponent implements OnInit {

  /**
   * Which columns we should display. Reorder to prioritize columns differently.
   * Notice! 'delete-instance' should always come last.
   */
  public displayedColumns: string[] = [
    'username',
    'contact_id_name',
    'created',
    'delete-instance'
  ];

  /**
   * What element is currently expanded.
   */
  public expandedElement: any | null;


  // Need to view paginator as a child to update page index of it.
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Form control declarations to bind up with reactive form elements.
  public username: FormControl;
  public description: FormControl;
  public created: FormControl;
  public task_id: FormControl;
  public contact_id_name: FormControl;


  /**
   * Creates an instance of your CRUD component.
   * 
   * @param httpService Needed to be able to invoke backend during CRUD operations
   * @param authService Needed to check if user has access to invoking CRUD operation
   * @param snackBar Needed to display errror and feedback
   * @param dialog Needed to show modal dialog as user edits or creates new entities
   * @param sanitizer Needed to be able to dynamically display iframes
   */
   constructor(
    public httpService: HttpService,
    public authService: AuthService,
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer) {
      super(authService, snackBar, dialog, sanitizer);
  }

  /**
   * Overridde abstract method necessary to return the URL endpoint
   * for CRUD methods to base class.
   */
  public entityBaseUrl() {
    return 'magic/modules/aista-crm/tasks';
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve items from backend.
   */
  protected read(filter: any) {
    return this.httpService.aista_crm_tasks.read(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve count of items from backend.
   */
  protected count(filter: any) {
    return this.httpService.aista_crm_tasks.count(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually delete items in backend.
   */
  protected delete(ids: any) {
    return this.httpService.aista_crm_tasks.delete(ids);
  }

  /**
   * Implementation of abstract base class method, to reset paginator
   * of component.
   */
  protected resetPaginator() {
    this.paginator.pageIndex = 0;
    this.filter.offset = 0;
  }

  /**
   * OnInit implementation. Retrieves initial data (unfiltered),
   * and instantiates our FormControls.
   */
  public ngOnInit() {

    // Retrieves data from our backend, unfiltered, and binds our mat-table accordingly.
    this.getData();

    /*
     * Creating our filtering FormControl instances, which gives us "live filtering"
     * on our columns.
     */
    this.username = this.createFormControl('tasks.username.like');
    this.description = this.createFormControl('tasks.description.like');
    this.created = this.createFormControl('tasks.created.eq');
    this.task_id = this.createFormControl('tasks.task_id.eq');
    this.contact_id_name = this.createFormControl('contacts.name.like');
  }

  /**
   * Invoked when user wants to edit an entity
   * 
   * This will show a modal dialog, allowing the user to edit his record.
   */
  public editEntity(entity: any) {

    const dialogRef = this.dialog.open(EditAista_crm_tasksComponent, {
      data: this.getEditData(entity)
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getData(true, () => {
          this.expandedElement = this.data.filter(x => x.task_id === this.expandedElement.task_id)[0];
        });
      }
    });
  }

  /**
   * Invoked when user wants to create a new entity
   * 
   * This will show a modal dialog, allowing the user to supply
   * the initial data for the entity.
   */
  public createEntity() {

    const dialogRef = this.dialog.open(EditAista_crm_tasksComponent, {
      data: {
        isEdit: false,
        entity: {},
      }});
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.itemCreated(res);
      }
    });
  }
}
